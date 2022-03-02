import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";
import todoSlice from "../../components/TodoAja/Todos";
import {connectRouter} from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  common: Common,
  todos: todoSlice
});

export default createRootReducer;
