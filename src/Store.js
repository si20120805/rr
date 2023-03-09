import {  legacy_createStore} from "redux";
import Rootreducer from "./Rootreducer";

const create= legacy_createStore(Rootreducer)

export default create;