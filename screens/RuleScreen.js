import React from 'react';
import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { Button, Text } from 'native-base';

class RuleScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>
                        The rule is really easy. You will choose the correct color from the color button at the bottom.
                        The correct color will depend on either what color the word meaning represents or what color the word is colored.
                    </Text>
                    <Text>
                        For the following case, in the red circle, it says "meaning", so the correct color will be what the word actually means.
                        In this case, the word is "red", so the correct color to choose is red.
                    </Text>
                    <Image source={require("../assets/meaning-situation.jpg")} style={styles.image} />
                    <Text>
                        For the following case, in the red circle, it says "color", so the correct color will be what color the word is colored.
                        In this case, the word is colored in pink, so the correct color to choose is pink.
                    </Text>
                    <Image source={require("../assets/color-situation.jpg")} style={styles.image} />
                    <Text>
                        In "normal" mode, this condition will change in order (meaning -> color -> meaning -> ...). In "random" mode, the condition will change randomly,
                        so you need to focus on what condition it is.
                    </Text>
                    <Text>{"\n"}</Text>
                    <Button success rounded onPress={() => this.props.navigation.navigate('Home')} style={styles.marginCenter}>
                        <Text style={styles.boldText}>
                            Back to Home
                    </Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
        width: "80%"
    },
    marginCenter: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    boldText: {
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        flex: 1,
        resizeMode: "contain"
    }
});

export default RuleScreen;