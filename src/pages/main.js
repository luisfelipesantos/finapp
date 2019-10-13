import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Main extends Component {

    static navigationOptions = {
        title: "FinApp"
    };

    state = {
        entries: []
    };

    componentDidMount() {
        this.loadEntries();
    }

    loadEntries = () => {
        const entriesList = [{
            name: "Salário",
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
        // console.log(entriesList);

        this.setState({
            entries: entriesList
        });
    };

    renderEntries = ({ item }) => (
        <View style={styles.entryCard}>
            <Text style={styles.cardValue}>R$ {item.value}</Text>
            <Text style={styles.cardName}>{item.name}</Text>

            <View>
                <View style={styles.editIcons}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="edit" size={20} color="#F5F5F5" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="delete" size={20} color="#F5F5F5" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.cardDate}>{item.date}</Text>
            </View>

        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Current Balance</Text>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>R$ 113,50</Text>
                </View>

                <View style={styles.entriesListContainer}>
                    <View style={styles.entriesHeader}>
                        <Text style={styles.entriesText}>Entries</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="add-circle" size={25} color="#222" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        contentContainerStyle={styles.entriesList}
                        data={this.state.entries}
                        keyExtractor={item => item.name}
                        renderItem={this.renderEntries}
                    />
                </View>

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
    entriesListContainer: {
        backgroundColor: "#F5F5F5",
        height: 400,
        marginTop: 20,
        width: 320,
        borderRadius: 7,

    },
    entriesText: {
        fontWeight: "bold",
        fontSize: 18
    },
    entriesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingBottom: 5,
        marginBottom: 0
    },
    resetText: {
        alignSelf: "center",
        marginTop: 10,
        color: "#f5f5f5",
        fontWeight: "bold"
    },
    entryCard: {
        padding: 15,
        backgroundColor: "#73C26D",
        borderRadius: 7,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    entriesList: {
        padding: 10,
    },
    editIcons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardValue: {
        color: "#f5f5f5",
        fontWeight: "bold",
        marginTop: 10
    },
    cardDate: {
        color: "#f5f5f5",
        fontSize: 10,
        marginTop: 5
    },
    cardName: {
        color: "#f5f5f5",
        marginTop: 10
    }
});