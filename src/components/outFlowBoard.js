import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class OutflowBoard extends Component {
    constructor(props) {
        super(props);
    }

    renderOutflows = ({ item }) => (
        <View style={styles.outflowCard}>
            <Text style={styles.cardValue}>R$ {item.value}</Text>
            <Text numberOfLines={2} style={styles.cardName}>{item.name}</Text>

            <View>
                <View style={styles.editIcons}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="edit" size={25} color="#F5F5F5" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="delete" size={25} color="#F5F5F5" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.cardDate}>{item.date}</Text>
            </View>

        </View>
    );

    render() {
        return (
            <View style={styles.outflowsListContainer}>
                <View style={styles.outflowsHeader}>
                    <Text style={styles.outflowsText}>Outflows</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="add-circle" size={25} color="#222" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    contentContainerStyle={styles.outflowsList}
                    data={this.props.data}
                    keyExtractor={item => item.name}
                    renderItem={this.renderOutflows}
                />
            </View>
        );
    }
}   

const styles = StyleSheet.create({
    outflowsListContainer: {
        backgroundColor: "#F5F5F5",
        height: 400,
        marginTop: 20,
        width: 320,
        borderRadius: 7,
        marginLeft: 20,
    },
    outflowsText: {
        fontWeight: "bold",
        fontSize: 18
    },
    outflowsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingBottom: 5,
        marginBottom: 0
    },
    outflowCard: {
        padding: 15,
        backgroundColor: "#DC6150",
        borderRadius: 7,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    outflowsList: {
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
    }
});