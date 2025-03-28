import { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Product from '../../components/Product';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../context/cartContext';

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Consulta',
      price: 200,
    },
    {
      id: '2',
      name: 'Anti-rábica',
      price: 90,
    },
    {
      id: '4',
      name: 'Vacina multipla',
      price: 150,
    },
    {
      id: '5',
      name: 'Banho',
      price: 23.9,
    },
    {
      id: '6',
      name: 'Tosa',
      price: 60.0,
    },
    {
      id: '7',
      name: 'Procedimento simples',
      price: 100,
    },
    {
      id: '8',
      name: 'Vermifugo',
      price: 9,
    },
    {
      id: '9',
      name: 'Aplicação de antipulgas',
      price: 15,
    },
    {
      id: '10',
      name: 'Soroterapia',
      price: 250.0,
    },
    {
      id: '11',
      name: 'Internção',
      price: 600.0,
    },
  ]);

  function handleAddcart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Serviços e produtos</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <View style={styles.dot}>
            <Text style={styles.dotText}>{cart?.length}</Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} addToCart={() => handleAddcart(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
    color: '#FFF',
  },
});
