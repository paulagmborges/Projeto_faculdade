import { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, } from 'react-native'
import { CartContext } from '../../context/cartContext'
import CardItem from '../../components/CardItem/index'

export default function Cart(){
  const { cart, addItemCart, removeItemCart,total } = useContext(CartContext);
 


  return(
    <View style={stlyes.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        ListEmptyComponent={ () => <Text>Nenhum item no carrinho...</Text>}
        renderItem={ ({ item }) => (
          <CardItem
            data={item}
            addAmount={ () => addItemCart(item) }
            removeAmount={ () => removeItemCart(item) }
          />
        )}
        ListFooterComponent={() => (
          <View style={stlyes.totalContainer}>
            <Text style={stlyes.total}>Total: R$ {total.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  )
}

const stlyes = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14, 
    paddingEnd: 14,
    paddingTop: 14,
  }
})