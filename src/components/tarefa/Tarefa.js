import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Tarefa({onRemover, tarefa}){

    return(
        <View style={styles.container}>
            <View style={styles.tarefa}>
                <Text style={styles.texto}>{tarefa}</Text>

                <TouchableOpacity style={styles.botao} onPress={onRemover}>
                    <Text style={styles.texto}>Del</Text>
                </TouchableOpacity>
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
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: 'row'
    },
    texto:{
        fontSize: 18,
        fontWeight: '400',
        color: '#000'
    },
    botao:{
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 2
    }
})