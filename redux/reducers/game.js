import {conditions} from '../actions/actions';

const initialState = {
    answer: "",
    choices: [],
    color_index: 0,
    condition: conditions.meaning,
    point: 0,
    questionsLeft: 10,
    isAnswered: false,
    result_text: ""
}

const game = (state=initialState, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return {
                ...state,
                answer: action.answer,
                choices: action.choices,
                color_index: action.color_index
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
        case "CHANGE_ISANSWERED":
            return {
                ...state,
                isAnswered: action.isAnswered
            }
        case "CHANGE_RESULT_TEXT":
            return {
                ...state,
                result_text: action.result_text
            }
        case "RESET_GAME":
            return initialState;
        default:
            return state;
    }
}

export default game;