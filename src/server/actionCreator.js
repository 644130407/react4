/**
 * Created by apple on 16/1/6.
 */
export function addRoom(room){
    return{
        type:"ADD_ROOM",
        room:room
    }
}
export function removeRoom(payload){
    return{
        type:"REMOVE_ROOM",
        payload:payload
    }
}