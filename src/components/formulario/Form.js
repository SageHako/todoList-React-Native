import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Tarefa from "../tarefa/Tarefa";
import {Button} from 'react-native-paper'

export default function Form(){
    const[tarefa, setTarefa] = useState()
    const[listtarefa, setListTarefa] = useState([])

    const handleTarefa = ()=>{
        if(tarefa){
            setListTarefa([...listtarefa, tarefa])
            setTarefa('')
        }
    }

    const deleteTarefa = (index)=>{
        const novaLista = listtarefa.filter( (_, i) => i !== index)
        setListTarefa(novaLista)
    }
    return(
        <View >
            <View style={styles.container}>
                <TextInput 
                    onChangeText={setTarefa}
                    value={tarefa}
                    style={styles.input}
                    placeholder="Adicione uma tarefa"/>

                <Button icon='plus-thick' mode='contained' style={styles.btn} onPress={handleTarefa}/>
            </View>
            
            <View style={styles.contentTarefa}>
                {listtarefa.map( (item, index) =>(
                    <Tarefa key={index} tarefa={item} onRemover={()=>deleteTarefa(index)}/>
                ))}
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    contentTarefa:{
        flex: 1,
        alignItems: 'left',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    input:{
        padding: 15,
        fontSize: 18,
        width: '80%',
        borderWidth: 2,
        borderRadius: 10
    },
    btn:{
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginLeft: 5
    }
})