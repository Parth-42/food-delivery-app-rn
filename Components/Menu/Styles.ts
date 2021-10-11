import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    screenTitle: {
        fontSize: 40,
        fontWeight: "700",
    },

    profile: {
        borderRadius: 1000,
        alignSelf: "center",
        height: 40,
        width: 40,
    },

    
    searchBar: {
        marginTop: 25,
        position: "relative",
    },

    input: {
        paddingLeft: 40,
        paddingHorizontal: 15,
        paddingVertical: 13,
        backgroundColor: "#F2F2F3",
        borderRadius: 20,
        color: "#949494",
        fontWeight: "bold"
    },

    searchIcon: {
        fontSize: 20,
        position: "absolute",
        top: "50%",
        transform: [
            {translateY: -10}
        ],
        paddingLeft: 15,
        fontWeight: "bold",
        color: "#949494"
    },

    dishes:{
        marginTop: 25,
    },

    btn:{
        height: 80,
        width: 80,
        backgroundColor: "#F2F2F3",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
        flexDirection: "column",
    },

    dishImg: {
        height: 50,
        width: 50,
        resizeMode: "contain"
    },

    selectedDish: {
        backgroundColor: "#6B45BC",
        color: "black"
    },

    btnText:{
        alignSelf:"center",
        paddingTop: 7,
        color: "#D2D2D3",
        fontWeight: "bold"
    },

    popularDishes: {
        marginTop: 30
    },

    dishesGrid: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },


    dish:{
        backgroundColor: "#F3F2F2",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 25,
        width: 165,
        position: "relative",
        marginBottom: 40,
    },

    dishImage:{
        height: 125,
        width: 125,
    },

    dishName:{
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15,
    },

    dishPrice: {
        color: "#F9B800",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 3,
        marginBottom: 10,
    },

    addToCart: {
        backgroundColor: "#6B44BD",
        color: "white",
        padding: 5,
        borderRadius: 1000,
        fontSize: 25,
        position: "absolute",
        bottom: -15
    }

})

export default styles

