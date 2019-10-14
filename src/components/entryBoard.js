import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EntryBoard extends Component {
    constructor(props) {
        super(props);
    }
    
    renderEntries = ({ item }) => (
        <View style={styles.entryCard}>
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
            <View style={styles.entriesListContainer}>
                <View style={styles.entriesHeader}>
                    <Text style={styles.entriesText}>Entries</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="add-circle" size={25} color="#222" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    contentContainerStyle={styles.entriesList}
                    data={this.props.data}
                    keyExtractor={item => item.name}
                    renderItem={this.renderEntries}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    
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
    entryCard: {
        padding: 15,
        backgroundColor: "#73C26D",
        borderRadius: 7,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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