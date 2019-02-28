export const difficulty_list = ["easy", "normal", "hard"];

export const mode_list = ["normal", "random"];

export const changeDifficulty = (index) => ({
    type: "CHANGE_DIFFICULTY",
    index
});

export const changeMode = (index) => ({
    type: "CHANGE_MODE",
    index
})