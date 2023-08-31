import { FlatList, Text, ImageBackground, StyleSheet } from 'react-native';
import Message from '../components/Message';

import bg from '../../assets/images/BG.png';

import messages from '../../assets/data/messages.json';

const ChatScreen = () => {
    return (
        <ImageBackground source={bg} style={StyleSheet.bg}>
            <FlatList
                data={messages}
                style={styles.list}
                renderItem={({ item }) => <Message message={item} />}
            />
        </ImageBackground>
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