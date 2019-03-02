const initialState = {
    score: 0
}

const result = (state=initialState, action) => {
    switch (action.type) {
        case "GET_SCORE": 
            return {
                ...state,
                score: action.score
            }
        default:
            return state;
    }
}

export default result;