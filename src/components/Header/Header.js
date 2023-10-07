import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Tarefa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f6faf3',
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    titulo:{
        color: '#13250e',
        fontSize: 25,
        fontWeight: 'bold'
    }
})