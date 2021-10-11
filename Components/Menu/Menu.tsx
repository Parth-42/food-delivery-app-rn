import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./Styles";

const Menu = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigationData = [
    {
      id: 0,
      link: require("../../assets/dish-plate.png"),
      title: "All",
    },
    {
      id: 1,
      link: require("../../assets/burger.png"),
      title: "Burgers",
    },
    {
      id: 2,
      link: require("../../assets/steak.png"),
      title: "Dishes",
    },
    {
      id: 3,
      link: require("../../assets/sushi.png"),
      title: "Sushi",
    },
  ];

  const dishesData = [
    {
      id: 0,
      image: require("../../assets/pasta.png"),
      name: "Pasta",
      price: "$12.00",
    },
    {
      id: 1,
      image: require("../../assets/noodles.png"),
      name: "Noodles",
      price: "$16.00",
    },
    {
      id: 2,
      image: require("../../assets/biryani.png"),
      name: "Biryani",
      price: "$17.00",
    },
    {
      id: 3,
      image: require("../../assets/salad.png"),
      name: "Salad",
      price: "$20.50",
    },
  ];

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Menu</Text>
        <Image
          style={styles.profile}
          source={require("../../assets/profile_pic.jpeg")}
        ></Image>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          onChangeText={setSearchInput}
          value={searchInput}
          placeholder="Search"
        />
        <Icon
          style={styles.searchIcon}
          name="search"
          color="black"
          onPress={() => {}}
        />
      </View>

      <View style={styles.dishes}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={4}
          data={navigationData}
          renderItem={({ item }) => (
            <View key={item.id}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  item.title === "All" ? styles.selectedDish : {},
                ]}
                onPress={() => {}}
              >
                <Image style={styles.dishImg} source={item.link}></Image>
              </TouchableOpacity>
              <Text
                style={[
                  styles.btnText,
                  item.title === "All" ? { color: "black" } : {},
                ]}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.popularDishes}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Popular</Text>

        <View style={styles.dishesGrid}>
          <FlatList
            columnWrapperStyle={{
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            numColumns={2}
            data={dishesData}
            renderItem={({ item }) => (
              <View style={styles.dish} key={item.id}>
                <Image source={item.image} style={styles.dishImage}></Image>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.dishPrice}>{item.price}</Text>
                <Icon
                  style={styles.addToCart}
                  name="plus"
                  color="black"
                  onPress={() => {}}
                />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Menu;
