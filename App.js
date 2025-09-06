import React, {useEffect, useState} from "react"
import {View, Text, ScrollView, StyleSheet, Button} from "react-native"
import api from './src/devices/api'

// declaração do componente principal 'App'
export default function App(){

  //users - variável que conterá a lista de usuários
  const[users, setUsers] = useState([])

  // definir a URl da API que será usada para buscar os usuários
  const API = "http://10.110.12.38:9000/users"

  //função para buscar os usuários da API
  async function fetchUsers(){
    try{
      const response = await api.get(API)
      setUsers(response.data)
    }catch(error){
      console.log("Error GET:", error.message)
    }
  }

  // useEffect - identificar o inicio do App e chama a função fetchUsers
  useEffect(()=>{
    fetchUsers()
  },[])

  const _render = () =>{
    const vet = []
    // iteração no Array 'users' para mostrar os usuários por meio de componentes View
    users.map((item, index) => {
      vet.push(
        <View key={index}>
          <Text style={styles.item}>
              ID:{item.id}
              Nome:{item.name}
              Email:{item.email}
          </Text>
        </View>
      )
    })
    return vet
  }

  // retorno do componente 'App' - define a estrutura da interface
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        GET - Listar Usuários
      </Text>
      <Button title="recarrrgar Lista" onPress={fetchUsers}/>
      <ScrollView>
        {_render()}
      </ScrollView>
    </View>
  )

}

// definição dos estilos
const styles = StyleSheet.create({
  container : {flex:1, padding:20, marginTop:40},
  title : {fontSize:22, fontWeight: "bold", marginBottom: 10},
  item : {fontSize:12, marginTop:10}
})
