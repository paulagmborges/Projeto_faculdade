import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'

import { Feather } from '@expo/vector-icons'

export default function Home(){
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "",
      price: 19.90
    },
    {
      id: '2',
      name: "",
      price: 6.50
    },
    {
      id: '4',
      name: "",
      price: 15
    },
    {
      id: '5',
      name: "",
      price: 23.90
    },
    {
      id: '6',
      name: "",
      price: 6.00
    },
  ])

  return(
    <SafeAreaView style={stlyes.container}>
      <View style={stlyes.cartContent}>
        <Text style={stlyes.title}>Serviços e produtos</Text>

        <TouchableOpacity style={stlyes.cartButton}>
          <View style={stlyes.dot}>
            <Text style={stlyes.dotText}>5</Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>

      </View>
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