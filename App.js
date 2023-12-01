import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Esse é o início</Text>
      <Button title="Login" onPress={()=>{
        navigation.navigate ('Login')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Aqui faz o login</Text>
      <Button title="Cadastro" onPress={()=>{
        navigation.navigate ('Cadastro')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Aqui faz o cadastro</Text>
      <Button title="Admin" onPress={()=>{
        navigation.navigate ('Admin')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaAdmin(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela do Admin</Text>
      <Button title="Produtos 1" onPress={()=>{
        navigation.navigate ('Produtos1')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaDosProdutos1(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela dos primeiros produtos</Text>
      <Button title="Produtos 2" onPress={()=>{
        navigation.navigate ('Produtos2')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaDosProdutos2(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela dos segundos produtos</Text>
      <Button title="Finalizar Compra" onPress={()=>{
        navigation.navigate ('FinalizarCompra')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaFinalizarCompra(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de finalizar a compra</Text>
      <Button title="voltar" onPress={()=>{
        navigation.navigate ('Início')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Admin" component={TelaAdmin} />
        <Stack.Screen name="Produtos1" component={TelaDosProdutos1} />
        <Stack.Screen name="Produtos2" component={TelaDosProdutos2} />
        <Stack.Screen name="FinalizarCompra" component={TelaFinalizarCompra} />
      </Stack.Navigator>
    </NavigationContainer>
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

