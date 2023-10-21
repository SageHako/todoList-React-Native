import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Button} from 'react-native-paper'

export default function Tarefa({onRemover, tarefa}){

    return(
        <View style={styles.container}>
            <View style={styles.tarefa}>
                <Text style={styles.texto}>{tarefa}</Text>

                <Button  icon='delete-alert' mode='contained' style={styles.botao} onPress={onRemover}/>
                    {/* <Text style={styles.texto}>Del</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    tarefa:{
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: 'row'
    },
    texto:{
        fontSize: 22,
        fontWeight: '400',
        color: '#000'
    },
    botao:{
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10,
        borderWidth: 2
    }
})