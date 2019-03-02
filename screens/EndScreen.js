import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { getScore, resetGame } from '../redux/actions/actions';

class EndScreen extends React.Component {
    componentDidMount() {
        this.props.getScore();
        this.props.resetGame();
    }

    render() {
        return (
            <Container style={styles.container}>
                <Text>Your Score: </Text>
                <Text style={[styles.score, styles.boldText]}>{this.props.score}</Text>
                <View style={styles.buttonsContainer}>
                    <Button full success rounded onPress={() => this.props.navigation.replace('Game')}>
                        <Text style={styles.boldText}>
                            Retry
                        </Text>
                    </Button>
                    <Text>{"\n"}</Text>
                    <Button full success rounded onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.boldText}>
                            Back to Home
                        </Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: "20%",
        alignItems: "center"
    },
    buttonsContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%"
    },
    boldText: {
        fontWeight: "bold"
    },
    score: {
        color: "red",
        fontSize: 20
    }
});

const mapStateToProps = (state, ownProps) => ({
    score: state.result.score
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    resetGame: () => dispatch(resetGame()),
    getScore: () => dispatch(getScore())
})

EndScreen.propTypes = {
    score: PropTypes.number.isRequired,
    resetGame: PropTypes.func.isRequired,
    getScore: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EndScreen);