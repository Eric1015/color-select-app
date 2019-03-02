import { combineReducers } from 'redux';
import game_setting from './reducers/game_setting';
import game from './reducers/game';
import result from './reducers/result';

export default combineReducers({
    game_setting,
    game,
    result
});