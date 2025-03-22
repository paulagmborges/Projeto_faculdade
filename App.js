
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import CartProvider from './src/context/cartContext'; // Importa o CartProvider

export default function App() {
  return (
    <CartProvider> {/* Envolvendo o aplicativo com o CartProvider */}
      <NavigationContainer>
        <StatusBar style="auto" />
        <Routes />
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
