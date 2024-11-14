import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
    imageUrl: require("./images/images (1).jpg"),
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

//Este es un componente para manejar la galería dinámica
const DynamicGallery = () => {
  const [actualImageIndex, setActualImageIndex] = useState(0); //acá se va guardando el indice de la imágen que se va mostrando

  const changeImage = () => {
    //va recorriendo por los indices. Con % vuelve al inicio
    setActualImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View style={styles.container}>
      <Image
        source={images[actualImageIndex].imageUrl}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.description}>
        {images[actualImageIndex].description}
      </Text>
      <Text style={styles.description}>
        Imagen {actualImageIndex + 1} de {images.length}
      </Text>
      <Button title="Cambiar imágen" onPress={changeImage} />
      <StatusBar style="auto" />
    </View>
  );
};

//Este componente se encarga de mostrar la galeria con la scroll view de la parte 1
const GalleryScroll = () => {
  return (
    <ScrollView>
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
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Galería" component={GalleryScroll} />
        <Tab.Screen name="Cambio Dinámico" component={DynamicGallery} />
      </Tab.Navigator>
    </NavigationContainer>
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
    borderRadius: 10,
    elevation: 2,
    overflow: "hidden",
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
