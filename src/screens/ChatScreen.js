import { useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, ImageBackground, StyleSheet, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import Message from '../components/Message';
import InputBox from '../components/InputBox';

import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';

const ChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])

    navigation.setOptions({ title: route.params.name })

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90} style={styles.bg}>
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    style={styles.list}
                    renderItem={({ item }) => <Message message={item} />}
                />
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
});

export default ChatScreen;