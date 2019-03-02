import { NavigationActions } from "react-navigation";

export const difficulty_list = ["easy", "normal", "hard"];

export const mode_list = ["normal", "random"];

export const color_list = ["red", "blue", "yellow", "orange", "black", "purple", "pink", "green"];

export const conditions = {
    color: "color",
    meaning: "meaning"
}

export const number_of_choices = {
    easy: 3,
    normal: 4,
    hard: 6
}

function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

export const changeDifficulty = (index) => ({
    type: "CHANGE_DIFFICULTY",
    index
});

export const changeMode = (index) => ({
    type: "CHANGE_MODE",
    index
});

export const changeColor = () => {
    return (dispatch, getState) => {
        let copy = [];
        for (let i = 0; i < color_list.length; i++) {
            copy.push(color_list[i]);
        }
        shuffle(copy);
        let difficulty = getState().game_setting.difficulty;
        let answer_index = Math.floor(Math.random() * number_of_choices[difficulty]);
        let choices = [];
        for (let i = 0; i < number_of_choices[difficulty]; i++) {
            choices.push(copy.pop());
        }
        dispatch({type: "CHANGE_COLOR", answer: choices[answer_index], choices: choices});
    }
}

export const changeCondition = () => {
    return (dispatch, getState) => {
        let mode = getState().game_setting.mode;
        if (mode === "normal") {
            let condition = getState().game.condition;
            if (condition === "color") {
                dispatch({type: "CHANGE_CONDITION", condition: conditions.meaning});
            } else {
                dispatch({type: "CHANGE_CONDITION", condition: conditions.color});
            }
        } else if (mode === "random") {
            let random_index = Math.floor(Math.random() * 2);
            if (random_index === 0) {
                dispatch({type: "CHANGE_CONDITION", condition: conditions.meaning});
            } else {
                dispatch({type: "CHANGE_CONDITION", condition: conditions.color});
            }
        }
    }
}

export const changePoint = (point) => ({
    type: "CHANGE_POINT",
    point: point
})

function nextQuestion(dispatch) {
    dispatch(changeColor());
    dispatch(changeCondition());
    dispatch(decreaseQuestionLeft());
}

export const handleCorrect = () => {
    return (dispatch, getState) => {
        let difficulty = getState().game_setting.difficulty;
        let mode = getState().game_setting.mode;
        let point = getState().game.point;
        if (difficulty === "easy") {
            point += 10;
        } else if (difficulty === "normal") {
            point += 15;
        } else if (difficulty === "hard") {
            point += 20;
        }
        if (mode === "random") {
            point += 5;
        }
        dispatch(changePoint(point));
        nextQuestion(dispatch);
    }
}

export const handleWrong = () => {
    return (dispatch, getState) => {
        let point = getState().game.point;
        point -= 5;
        dispatch(changePoint(point));
        nextQuestion(dispatch);
    }
}

export const decreaseQuestionLeft = () => {
    return (dispatch, getState) => {
        let questionsLeft = getState().game.questionsLeft;
        questionsLeft--;
        dispatch({type: "DECREASE_QUESTION", questionsLeft: questionsLeft});
    }
}

export const resetGame = () => {
    return (dispatch, getState) => {
        dispatch({type: "RESET_GAME"});
    }
}

export const getScore = () => {
    return (dispatch, getState) => {
        let point = getState().game.point;
        dispatch({type: "GET_SCORE", score: point});
    }
}