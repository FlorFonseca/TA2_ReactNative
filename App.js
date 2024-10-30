import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const images = [
  {
    id: "1",
    imageUrl: require("./images/descarga (1).jpg"),
    description: "pug inclinando la cabeza",
  },
  {
    id: "2",
    imageUrl: require("./images/descarga.jpg"),
    description: "Cuatro perros corriendo felices",
  },
  {
    id: "3",
    imageUrl: require('./images/images (1).jpg'),
    description: "Labrador masticando un juguete colorido",
  },
  {
    id: "4",
    imageUrl: require("./images/images (2).jpg"),
    description: "Rottweiler chiquito",
  },
  {
    id: "5",
    imageUrl: require("./images/images.jpg"),
    description: "Chihuahua marrón y clarito con buzo rojo",
  },
  {
    id: "6",
    imageUrl: require("./images/que-frutas-pueden-comer-perros-cuales-son-peligrosas-salud_98.webp"),
    description: "Dalmata comiendo una sandía",
  },
];

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView >
        {images.map((imagen) => (
          <View key={imagen.id} style={styles.imageContainer}>
            <Image
              source={imagen.imageUrl}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.description}>{imagen.description}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    margin: 10,
    padding:10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  image: {
    width: 200, 
    height: 200,
  },
  description: {
    padding: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
