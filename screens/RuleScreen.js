import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Text} from 'native-base';

class RuleScreen extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Text>
                    The rule is really easy. You will choose the correct color from the color button at the bottom.
                    The correct color will depend on either what color the word meaning represents or what color the word is colored.
                    In "normal" mode, this condition will change one by one. In "random" mode, the condition will change randomly,
                    so you need to focus on what condition it is which is displayed in the top right of the game screen.
                </Text>
                <Text>{"\n"}</Text>
                <Button success rounded onPress={() => this.props.navigation.navigate('Home')} style={styles.marginCenter}>
                    <Text style={styles.boldText}>
                        Back to Home
                    </Text>
                </Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%"
    },
    marginCenter: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    boldText: {
        fontWeight: "bold"
    }
});

export default RuleScreen;