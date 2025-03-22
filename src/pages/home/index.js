import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../context/cartContext'

export default function Home(){
  const { cart } = useContext(CartContext)

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Consulta",
      price: 200
    },
    {
      id: '2',
      name: "Anti-rábica",
      price: 90
    },
    {
      id: '4',
      name: "Vacina multipla",
      price: 150
    },
    {
      id: '5',
      name: "Banho",
      price: 23.90
    },
    {
      id: '6',
      name: "Tosa",
      price: 60.00
    },
  ])

  return(
    <SafeAreaView style={stlyes.container}>
      <View style={stlyes.cartContent}>
        <Text style={stlyes.title}>Serviços e produtos</Text>

        <TouchableOpacity 
        style={stlyes.cartButton} 
        onPress={ () => navigation.navigate("Cart")}
        >
          <View style={stlyes.dot}>
            <Text style={stlyes.dotText}>
              {cart?.length}
            </Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={stlyes.list}
        data={products}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Product data={item} /> }
      />


    </SafeAreaView>
  )
}

const stlyes = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText:{
    fontSize: 12,
  }
})