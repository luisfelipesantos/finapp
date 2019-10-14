import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import EntryBoard from './../components/entryBoard';
import OutflowBoard from './../components/outFlowBoard';

export default class Main extends Component {
    static navigationOptions = {
        title: "FinApp"
    };

    state = {
        entries: [],
        outflows: []
    };

    componentDidMount() {
        this.loadEntries();
        this.loadOutflows();
    }

    loadEntries = () => {
        const entriesList = [{
            name: "Lorem ipsum do lor sit am et, consec tetur adipiscing",
            value: "1150,00",
            date: "25/12/2019"
        }, {
            name: "Venda",
            value: "300,50",
            date: "12/12/2019"
        }, {
            name: "Aluguel Recebido",
            value: "500,00",
            date: "23/12/2019"
        }, {
            name: "Poupança",
            value: "30,00",
            date: "30/12/2019"
        }, {
            name: "Banco",
            value: "30,00",
            date: "30/12/2019"
        }];


        this.setState({
            entries: entriesList
        });
    };

    loadOutflows = () => {        
        const outflowsList = [{
            name: "Lorem ipsum do lor sit am et, consec tetur adipiscing",
            value: "50,00",
            date: "25/12/2019"
        }, {
            name: "Energia",
            value: "300,50",
            date: "12/12/2019"
        }, {
            name: "Água",
            value: "210,00",
            date: "23/12/2019"
        }];

        this.setState({
            outflows: outflowsList
        });
    }  

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Current Balance</Text>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>R$ 113,50</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.boardsContainer}>
                    {/*Entries*/}
                    <EntryBoard data={this.state.entries} />

                    {/*Outflows*/}
                    <OutflowBoard data={this.state.outflows} />

                </ScrollView>

                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.resetText}>Reset All</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3D3B3B",
        alignItems: "center"
    },
    textContainer: {
        color: "#eee",
        marginTop: 20,
        fontSize: 15,
        lineHeight: 20,
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif"
    },
    balanceContainer: {
        backgroundColor: "#72C570",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        minWidth: 320,
        marginTop: 10
    },
    balanceText: {
        color: "#F5F5F5",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
    },
    editIcons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardValue: {
        color: "#f5f5f5",
        fontWeight: "bold",
    },
    cardDate: {
        color: "#f5f5f5",
        fontSize: 10,
        marginTop: 5
    },
    cardName: {
        color: "#f5f5f5",
        maxWidth: 130,
    },
    resetText: {
        color: "#f5f5f5",
        fontWeight: "bold",
        marginBottom: 15
    },
    boardsContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
    }
});