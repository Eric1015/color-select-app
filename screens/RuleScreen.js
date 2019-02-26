import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Text} from 'native-base';

class RuleScreen extends React.Component {
    render() {
        return (
            <Container style={styles.text_center}>
                <Button bordered onPress={() => this.props.navigation.navigate('Home')} >
                    <Text>
                        Back to Home
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
    }
});

export default RuleScreen;