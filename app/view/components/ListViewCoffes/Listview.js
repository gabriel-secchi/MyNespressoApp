
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListViewItemCoffe from './ListViewItem';

class ListViewCoffe extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            dataItems: null, 
            refreshing: false
        }

        this.searchItems();
    }

    searchItems() {
        let num = Math.random()
        fetch(`https://raw.githubusercontent.com/gabriel-secchi/MyNespressoAppData/main/data.json?v=${num}`)
            .then(response => response.json())
            .then(data => {
                this.setState({dataItems: data})
                this.setState({refreshing: false})
            })
            .catch(error => {
                console.log(error)
                this.setState({refreshing: false})
            });
    }

    aplyFilter(data) {
        let filter = this.props.filter
        if(filter === undefined || filter == null || filter === null || filter.trim() == "")
            return data

        let filterDecaffe = false
        if("descafeinado".includes(filter.toLowerCase()))
            filterDecaffe = true

        return data.filter(it => 
            it.name.toLowerCase().includes(filter.toLowerCase()) ||
            (filterDecaffe && it.decaffeinated)
        )
    }

    render() {

        const ListItem = (objItem) => {
            return(
                <ListViewItemCoffe coffeItem={objItem.item} navigation={this.props.navigation} />
            )
        }

        const onRefresh = () => {
            this.setState({refreshing: true})
            this.searchItems()
        }

        let data = this.aplyFilter(this.state.dataItems)

        return(
            <FlatList
                data={data}
                renderItem={ListItem}
                keyExtractor={item => item.id}
                refreshing={this.state.refreshing}
                onRefresh={onRefresh} />
        );
    }
}

export default ListViewCoffe;