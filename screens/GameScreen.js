import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Text, H1 } from 'native-base';
import { changeColor, changeCondition, handleCorrect, handleWrong } from '../redux/actions/actions';

class GameScreen extends React.Component {
    constructor() {
        super();
        this.state = { count: 3, ready: false };
    }

    countDown = () => {
        this.setState({ count: this.state.count - 1 }, () => {
            if (this.state.count > 0) {
                setTimeout(this.countDown, 1000);
            } else {
                this.setState({ ready: true });
            }
        })
    }

    renderChoices = () => {
        return this.props.choices.map((choice, i) => 
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: choice }]} key={i} onPress={this.props.answer === choice ? () => this.props.handleCorrect() : () => this.props.handleWrong()}></TouchableOpacity>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.questionsLeft <= 0) {
            this.props.navigation.replace('End');
        }
    }

    componentDidMount() {
        this.props.changeColor();
        setTimeout(this.countDown, 1000);
    }

    render() {
        if (this.state.ready) {
            return (
                <Container style={[styles.container, styles.text_center]}>
                    <Text>{this.props.questionsLeft}</Text>
                    <Text>Score: {this.props.point}</Text>
                    <Text style={styles.condition}>{this.props.condition === "meaning" ? "meaning" : "color"}</Text>
                    {this.props.condition === "meaning" ?
                        <H1 style={[styles.title, { color: this.props.choices[Math.floor(Math.random() * this.props.choices.length)] }]}>
                            {this.props.answer}
                        </H1>
                        :
                        <H1 style={[styles.title, { color: this.props.answer }]}>
                            {this.props.choices[Math.floor(Math.random() * this.props.choices.length)]}
                        </H1>
                    }
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <View style={styles.buttonsContainer}>
                        {this.renderChoices()}
                    </View>
                </Container>
            )
        } else {
            return (
                <Container style={styles.text_center}>
                    <H1>{this.state.count}</H1>
                </Container>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: "20%",
    },
    title: {
        fontWeight: "bold",
        marginTop: "23%"
    },
    text_center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        flexWrap: "wrap"
    },
    colorButton: {
        width: 75, 
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    condition: {
        fontWeight: "bold",
        color: "orange",
        position: "absolute",
        top: 0,
        right: 10
    }
});

const mapStateToProps = (state, ownProps) => ({
    answer: state.game.answer,
    choices: state.game.choices,
    condition: state.game.condition,
    point: state.game.point,
    questionsLeft: state.game.questionsLeft
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeColor: () => dispatch(changeColor()),
    changeCondition: () => dispatch(changeCondition()),
    handleCorrect: () => dispatch(handleCorrect()),
    handleWrong: () => dispatch(handleWrong())
})

GameScreen.propTypes = {
    answer: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
    condition: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
    questionsLeft: PropTypes.number.isRequired,
    changeColor: PropTypes.func.isRequired,
    changeCondition: PropTypes.func.isRequired,
    handleCorrect: PropTypes.func.isRequired,
    handleWrong: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameScreen);