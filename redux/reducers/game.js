import {conditions} from '../actions/actions';

const initialState = {
    answer: "",
    choices: [],
    condition: conditions.meaning,
    point: 0,
    questionsLeft: 10
}

const game = (state=initialState, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return {
                ...state,
                answer: action.answer,
                choices: action.choices
            }
        case "CHANGE_CONDITION":
            return {
                ...state,
                condition: action.condition
            }
        case "CHANGE_POINT":
            return {
                ...state,
                point: action.point
            }
        case "DECREASE_QUESTION":
            return {
                ...state,
                questionsLeft: action.questionsLeft
            }
        case "RESET_GAME":
            return initialState;
        default:
            return state;
    }
}

export default game;