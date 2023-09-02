import { View, TextInput, StyleSheet } from "react-native"
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn("Sending a new message!", newMessage)

        setNewMessage('');
    };

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <AntDesign name="plus" size={20} color="royalblue" />
            <TextInput onChangeText={setNewMessage} placeholder="Type your message" style={styles.input}/>
            <MaterialIcons onPress={onSend} name="send" size={16} color="white" style={styles.send}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        marginHorizontal: 10,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden'
    },
});

export default InputBox;