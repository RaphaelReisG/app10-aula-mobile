import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default function App(){
  const [valor, setValor] = useState(0)
  const [moeda1, setMoeda1] = useState('Real')
  const [moedas1, setMoedas1] = useState([
        {id: 1, nome: 'Real'},
        {id: 2, nome: 'Dolar'},
        {id: 3, nome: 'Euro'},
  ])
  const [moeda2, setMoeda2] = useState('Real')
  const [moedas2, setMoedas2] = useState([
        {id: 1, nome: 'Real'},
        {id: 2, nome: 'Dolar'},
        {id: 3, nome: 'Euro'},
  ])
  const [resultado, setResultado] = useState('')


  function cadastrar(){
      if( valor != 0  ){
        if(moeda1 == 'Real'){
          if(moeda2 == 'Dolar'){
            let res = valor * 0.18
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
          else if(moeda2 == 'Euro'){
            let res = valor * 0.15
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
          else{
            let res = valor
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
        }
        else if(moeda1 == 'Dolar'){
          if(moeda2 == 'Real'){
            let res = valor * 5.48
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
          else if(moeda2 == 'Euro'){
            let res = valor * 0.84
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
          else{
            let res = valor
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
        }
        else if(moeda1 == 'Euro'){
          if(moeda2 == 'Dolar'){
            let res = valor * 1.19
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
          else if(moeda2 == 'Real'){
            let res = valor * 6.74
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
          else{
            let res = valor
            setResultado(("Resultado conversão de " + moeda1 + ' para '+ moeda2 + ' = ' + res))
          }
        }
        else{
          setResultado(("Não foi possível definir a moeda 1"))
        }
      }
      else{
        setResultado(("Campos em branco"))
      }
      
  }

    let moeda1Item = moedas1.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
    })

    let moeda2Item = moedas2.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
    })

    return(
      <View style={styles.area}>

      <Text style={styles.titulo2}>Raphael</Text>
      <Text style={styles.titulo}>Conversor de moedas</Text>

      <TextInput
      style={styles.input}
      placeholder="Digite o valor"
      onChangeText={ (valor) => setValor((valor)) }
      />

      <Text style={styles.texto2}> De: </Text>
      <Picker
        selectedValue={moeda1}
        onValueChange={ (itemValue, itemIndex) => setMoeda1((itemValue)) }
      >
        {moeda1Item}
      </Picker>
      <br/>

      <Text style={styles.texto2}> Para: </Text>
      <Picker
        selectedValue={moeda2}
        onValueChange={ (itemValue, itemIndex) => setMoeda2((itemValue)) }
      >
        {moeda2Item}
      </Picker>

      <br/>

      <Button title="Converter" onPress={cadastrar} />

      <br/>

      <Text style={styles.texto}> {resultado} </Text>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  },
  titulo2:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'black',
    marginTop: 20
  },
  imagem:{
    width: 200, 
    height: 150, 
    marginTop: 10, 
    alignSelf: "center"
  }

})
