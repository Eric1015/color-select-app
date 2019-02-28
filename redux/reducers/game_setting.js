import {difficulty_list, mode_list} from '../actions/actions';

const initialState = {
    difficulty: difficulty_list[0],
    difficulty_index: 0,
    mode: mode_list[0],
    mode_index: 0
}

const game_setting = (state=initialState, action) => {
    switch (action.type) {
        case "CHANGE_DIFFICULTY":
            return {
                ...state,
                difficulty: difficulty_list[action.index],
                difficulty_index: action.index
            }
        case "CHANGE_MODE":
            return {
                ...state,
                mode: mode_list[action.index],
                mode_index: action.index
            }
        default:
            return state;
    }
}

export default game_setting;