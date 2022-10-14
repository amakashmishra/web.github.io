import {combineReducers} from "redux";
import { cartreducer } from "./reducer";


const rootred = combineReducers({
    cart : cartreducer
});


export default rootred