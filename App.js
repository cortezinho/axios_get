import React, {useEffect, useState} from "react"
import {View, Text, ScrollView, StyleSheet, Button} from "react-native"
import api from './src/devices/api'

// declaração do componente principal 'App'
export default App(){

  //users - variável que conterá a lista de usuários
  const[users, setUsers] = useState([])

  // definir a URl da API que será usada para buscar os usuários
  const API = "http://trocar_por_IP_local:9000/users"

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

  const _render() =>{
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

}
