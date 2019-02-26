import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Text} from 'native-base';

class HomeScreen extends React.Component {
    render() {
        return (
            <Container style={styles.text_center}>
                <Text style={styles.boldText}>Color Selection</Text>
                <Button bordered onPress={() => this.props.navigation.navigate('Game')} >
                    <Text>
                        Start Game
                    </Text>
                </Button>
                <Button bordered onPress={() => this.props.navigation.navigate('Rule')} >
                    <Text>
                        Rule
                    </Text>
                </Button>
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
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export default HomeScreen;