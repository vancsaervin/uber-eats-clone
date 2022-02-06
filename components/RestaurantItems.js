import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Ando's Fast Food",
    image_url: "https://andos.ro/gfx/landing/catering1.jpg",
    categories: ["Fastfood", "Bar"],
    price: "$",
    reviews: 1233,
    rating: 4.1,
  },
  {
    name: "Beraria Pofta si Foame",
    image_url:
      "https://scontent.fsbz3-1.fna.fbcdn.net/v/t1.6435-9/103275905_2963896117051551_6306334003059456742_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=CniyUS57M0UAX8BvR4S&_nc_ht=scontent.fsbz3-1.fna&oh=00_AT-cn9wssMm209veh5e4Vtt9AUJAzWZswY5vBXlQ4HYFJA&oe=61FDF1F7",
    categories: ["Food", "Bar"],
    price: "$$",
    reviews: 1738,
    rating: 4.7,
  },
  {
    name: "La Turcu'",
    image_url: "http://photos.wikimapia.org/p/00/07/86/29/42_big.jpg",
    categories: ["Food", "Bar"],
    price: "$",
    reviews: 576,
    rating: 3.8,
  },
  {
    name: "La Ceaun",
    image_url:
      "https://images.happycow.net/venues/1024/95/77/hcmp95775_716892.jpeg",
    categories: ["Food", "Bar"],
    price: "$$",
    reviews: 1738,
    rating: 4.7,
  },
  {
    name: "Farmhouse Kitchen Thai Cuisine",
    image_url:
      "http://www.almanahonline.ro/wp-content/uploads/2016/08/A%C8%99a-trebuie-s%C4%83-ne-comport%C4%83m-la-restaurant.jpg",
    categories: ["Food", "Bar"],
    price: "$$$",
    reviews: 2345,
    rating: 4.9,
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  </>
);
