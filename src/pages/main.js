import React, { Component } from 'react';

import { Modal, Alert, View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import styles from './styles';

export default class Main extends Component {
    static navigationOptions = {
        title: "FinApp"
    };

    radios = [
        { label: "Entry", value: 0 },
        { label: "Outflow", value: 1 },
    ];

    state = {
        entries: [],
        outflows: [],
        createModalVisible: false,
        editModalVisible: false,
        radioMode: 0
    };

    componentDidMount() {
        this.loadEntries();
        this.loadOutflows();
    }

    setEditModalVisible(visible) {
        this.setState({ editModalVisible: visible });
    }

    setCreateModalVisible(visible) {
        this.setState({ createModalVisible: visible });
    }

    renderEntries = ({ item }) => (
        <View style={styles.entryCard}>
            <Text style={styles.cardValue}>R$ {item.value}</Text>
            <Text numberOfLines={2} style={styles.cardName}>{item.name}</Text>

            <View>
                <View style={styles.editIcons}>
                    <TouchableOpacity onPress={() => { this.setEditModalVisible(!this.state.editModalVisible) }}>
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

    renderOutflows = ({ item }) => (
        <View style={styles.outflowCard}>
            <Text style={styles.cardValue}>R$ {item.value}</Text>
            <Text numberOfLines={2} style={styles.cardName}>{item.name}</Text>

            <View>
                <View style={styles.editIcons}>
                    <TouchableOpacity onPress={() => { this.setEditModalVisible(!this.state.editModalVisible) }}>
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
        const { checked } = this.state;

        return (
            <View style={styles.container}>
                {/* Create Modal */}
                <Modal
                    transparent={true}
                    style={styles.createModal}
                    onRequestClose={() => { }}
                    animationType="fade"
                    visible={this.state.createModalVisible}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalHeaderText}>Add Transaction</Text>
                            <View style={styles.modalRadios}>
                                <Text>Type:</Text>
                                <RadioForm
                                    initial={this.state.radioMode}
                                    radio_props={this.radios}
                                    buttonSize={10}
                                    onPress={(value) => { }}
                                    formHorizontal={true}
                                    labelStyle={styles.radioForm}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <Text>Name: </Text>
                                <TextInput
                                    style={{ height: 35, backgroundColor: "#fff", flex: 1 }}
                                ></TextInput>
                            </View>
                            <View style={styles.inputView}>
                                <Text>Value: </Text>
                                <Text style={styles.rs}>R$</Text>
                                <TextInput
                                    style={{ height: 35, backgroundColor: "#fff", flex: 1 }}
                                ></TextInput>
                            </View>
                            <View style={styles.inputView}>
                                <Text>Date: </Text>
                                <Text style={styles.modalDate}>14 oct 2019</Text>
                            </View>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity style={styles.cancelButton} onPress={() => { this.setCreateModalVisible(!this.state.createModalVisible) }}>
                                    <Text style={styles.modalButtonText}>Cancel</Text>
                                    <Icon name="cancel" size={25} color="#f5f5f5" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.saveButton}  onPress={() => { }}>
                                    <Text style={styles.modalButtonText}>Save</Text>
                                    <Icon name="save" size={25} color="#f5f5f5" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

                {/* Edit Modal */}
                <Modal
                    transparent={true}
                    style={styles.createModal}
                    onRequestClose={() => { }}
                    animationType="fade"
                    visible={this.state.editModalVisible}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalHeaderText}>Edit Transaction</Text>
                            <View style={styles.modalRadios}>
                                <Text>Type:</Text>
                                <RadioForm
                                    initial={this.state.radioMode}
                                    radio_props={this.radios}
                                    buttonSize={10}
                                    onPress={(value) => { }}
                                    formHorizontal={true}
                                    labelStyle={styles.radioForm}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <Text>Name: </Text>
                                <TextInput
                                    style={{ height: 35, backgroundColor: "#fff", flex: 1 }}
                                ></TextInput>
                            </View>
                            <View style={styles.inputView}>
                                <Text>Value: </Text>
                                <Text style={styles.rs}>R$</Text>
                                <TextInput
                                    style={{ height: 35, backgroundColor: "#fff", flex: 1 }}
                                ></TextInput>
                            </View>
                            <View style={styles.inputView}>
                                <Text>Date: </Text>
                                <Text style={styles.modalDate}>14 oct 2019</Text>
                            </View>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity style={styles.cancelButton} onPress={() => { this.setEditModalVisible(!this.state.editModalVisible) }}>
                                    <Text style={styles.modalButtonText}>Cancel</Text>
                                    <Icon name="cancel" size={25} color="#f5f5f5" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.saveButton}  onPress={() => { }}>
                                    <Text style={styles.modalButtonText}>Save</Text>
                                    <Icon name="save" size={25} color="#f5f5f5" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

                <Text style={styles.textContainer}>Current Balance</Text>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>R$ 113,50</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.boardsContainer}>
                    {/*Entries*/}
                    <View style={styles.entriesListContainer}>
                        <View style={styles.entriesHeader}>
                            <Text style={styles.entriesText}>Entries</Text>
                            <TouchableOpacity onPress={() => {
                                this.setState({ radioMode: 0 });
                                this.setCreateModalVisible(!this.state.createModalVisible);
                            }}>
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

                    {/*Outflows*/}
                    <View style={styles.outflowsListContainer}>
                        <View style={styles.outflowsHeader}>
                            <Text style={styles.outflowsText}>Outflows</Text>
                            <TouchableOpacity onPress={() => {
                                this.setState({ radioMode: 1 });
                                this.setCreateModalVisible(!this.state.createModalVisible);
                            }}>
                                <Icon name="add-circle" size={25} color="#222" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            contentContainerStyle={styles.outflowsList}
                            data={this.state.outflows}
                            keyExtractor={item => item.name}
                            renderItem={this.renderOutflows}
                        />
                    </View>

                </ScrollView>

                <TouchableOpacity onPress={() => { 
                    Alert.alert(
                        'Reset All',
                        'Are you shure you want to reset all cards?',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {},
                                style: 'cancel',
                            },
                            {
                                text: 'OK', onPress: () => {}
                            },
                        ],
                        {cancelable: false},
                      );
                 }}>
                    <Text style={styles.resetText}>Reset All</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

