import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function BakeryItemsScreen() {
    const bakeries = [
      { name: 'Sourdough', price: '$1.00', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Baguette', price: '$0.90', image: 'https://media.istockphoto.com/id/2163156126/photo/baking-sourdough-bread-dough-products-flour-gluten-flatlay-a-variety-of-loaves.webp?s=2048x2048&w=is&k=20&c=qZuaDje6bzoEEyuiHPh_mgTCfypBmwa5ThT4kFr7_xI=' },
      { name: 'Whole Wheat Bread', price: '$1.00', image: 'https://images.unsplash.com/photo-1548577241-0e2435fef872?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Rye Bread', price: '$0.90', image: 'https://images.unsplash.com/photo-1551888761-382cd30b5da6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ciabatta', price: '$1.00', image: 'https://images.unsplash.com/photo-1667386773920-c73f3b02a3d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Naan', price: '$0.90', image: 'https://images.unsplash.com/photo-1690915475862-336b65f571a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Fresh Baked Bread directy from local bakeries</Text>
        {bakeries.map((bakery, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: bakery.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{bakery.name}</Text>
              <Text style={styles.price}>{bakery.price}</Text>
              <TouchableOpacity style={styles.button} onPress={() => alert(`${bakery.name} added to cart`)}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
            </View>


          </View>
        ))}
      </ScrollView>
    );
  }