import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Button, Text, Icon } from 'native-base';
import { difficulty_list, mode_list, changeDifficulty, changeMode } from '../redux/actions/actions';

class HomeScreen extends React.Component {
    render() {
        return (
            <Container style={[styles.text_center, styles.container]}>
                <Text style={[styles.boldText, styles.text_center, styles.title]}>Color Selection</Text>
                <Text>{"\n"}</Text>
                <Text style={[styles.boldText, styles.text_center]}>Difficulty</Text>
                <View style={[styles.text_center, styles.row]}>
                    <Button small iconLeft light disabled={this.props.difficulty_index <= 0} onPress={() => this.props.changeDifficulty(this.props.difficulty_index - 1)} >
                        <Icon name="arrow-back" />
                    </Button>
                    <Text style={styles.flex_text}>{this.props.difficulty}</Text>
                    <Button small iconRight light disabled={this.props.difficulty_index >= difficulty_list.length - 1} onPress={() => this.props.changeDifficulty(this.props.difficulty_index + 1)}>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
                <Text style={[styles.boldText, styles.text_center]}>Mode</Text>
                <View style={[styles.text_center, styles.row]}>
                    <Button small iconLeft light disabled={this.props.mode_index <= 0} onPress={() => this.props.changeMode(this.props.mode_index - 1)}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Text style={styles.flex_text}>{this.props.mode}</Text>
                    <Button small iconRight light disabled={this.props.mode_index >= mode_list.length - 1} onPress={() => this.props.changeMode(this.props.mode_index + 1)}>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
                <View style={[styles.text_center]}>
                    <Button full rounded success onPress={() => this.props.navigation.navigate('Game')}>
                        <Text style={styles.boldText}>
                            Start Game
                    </Text>
                    </Button>
                    <Text>{"\n"}</Text>
                    <Button full rounded success onPress={() => this.props.navigation.navigate('Rule')}>
                        <Text style={styles.boldText}>
                            Rule
                    </Text>
                    </Button>
                    <Text>{"\n"}</Text>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: "20%"
    },
    text_center: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    title: {
        fontSize: 28,
        color: "green",
        fontFamily: Platform.OS === 'ios' ? "AvenirNextCondensed-Heavy" : "Roboto"
    },
    flex_text: {
        marginLeft: '5%',
        marginRight: '5%'
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    boldText: {
        fontWeight: 'bold'
    }
});

const mapStateToProps = (state, ownProps) => ({
    difficulty: state.game_setting.difficulty,
    difficulty_index: state.game_setting.difficulty_index,
    mode: state.game_setting.mode,
    mode_index: state.game_setting.mode_index
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeDifficulty: (index) => dispatch(changeDifficulty(index)),
    changeMode: (index) => dispatch(changeMode(index))
})

HomeScreen.propTypes = {
    difficulty: PropTypes.string.isRequired,
    difficulty_index: PropTypes.number.isRequired,
    mode: PropTypes.string.isRequired,
    mode_index: PropTypes.number.isRequired,
    changeDifficulty: PropTypes.func.isRequired,
    changeMode: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);