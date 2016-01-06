/**
 * Created by Developer on 2016/1/6.
 */
import {Map, List, fromJS} from "immutable";
import {v1} from "uuid";

export const ININIAL_STATE = fromJS({
    rooms:[]
});

export function addRoom(state=ININIAL_STATE, room){
    if(!room || !room.owner) return state;
    return state.update("rooms", rooms=>rooms.push(Map({
        id: room.id || v1(),
        name: room.name || "no name",
        owner: room.owner
    })))
}

export function removeRoom(state, {id, user}){
    const rooms = state.get("rooms");
    console.log(user);
    var index = rooms.findIndex(r => r.get("id") === id);
    console.log(index);
    if(index == -1 || (rooms.getIn([index,"owner"])!==user)){
        console.log("不能删除");
        return state;
    }
    const a = state.update("rooms", rooms=>rooms.splice(index, 1));
    console.log("aaaa");
    return a;

}