import React from 'react';
import { StyleSheet } from 'react-native';

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
        margin: 10
    },
    boardsContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
    },
    entriesListContainer: {
        backgroundColor: "#F5F5F5",
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
        paddingTop: 10,
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
    outflowsListContainer: {
        backgroundColor: "#F5F5F5",
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
        paddingTop: 10,
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
    modalContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        flex: 1,
        justifyContent: "center"
    },
    modalContent: {
        backgroundColor: "#f5f5f5",
        borderRadius: 7,
        margin: 20,
        padding: 20
    },
    radioForm: {
        marginRight: 10
    },
    modalHeaderText: {
        fontWeight: "bold",
        fontSize: 20
    },
    modalRadios: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around"
    },
    inputView: {
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cancelButton: {
        flexDirection: "row",
        backgroundColor: "#DC6150",
        padding: 10,
        alignItems: "center",
        borderRadius: 7
    },
    modalButtonText: {
        color: "#f5f5f5",
        padding: 2
    },
    saveButton: {
        flexDirection: "row",
        backgroundColor: "#73C26D",
        padding: 10,
        alignItems: "center",
        borderRadius: 7
    },
    rs: {
        fontSize: 17,
        fontWeight: "bold",
        margin: 5
    },
    modalDate: {
        fontSize: 15,
        color: "#999"
    }
});

export default styles;