/**
 * Created by apple on 16/1/6.
 */
import {addRoom, removeRoom} from "./core";
export  default function reducer(state, action){
    switch (action.type){
        case "ADD_ROOM":
            return addRoom(state, action.room);
        case "REMOVE_ROOM":
            return removeRoom(state, action.payload);
    }
    return state
}