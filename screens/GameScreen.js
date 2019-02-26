import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Text} from 'native-base';

class GameScreen extends React.Component {
    render() {
        return (
            <Container style={styles.text_center}>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text_center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "auto",
        marginRight: "auto"
    }
});

export default GameScreen;