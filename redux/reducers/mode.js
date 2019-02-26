const mode = (state="normal", action) => {
    switch (action.type) {
        case "NORMAL_MODE":
            return "normal";
        case "RANDOM_MODE":
            return "random";
        default:
            return state;
    }
}

export default mode;