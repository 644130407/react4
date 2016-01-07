/**
 * Created by apple on 16/1/6.
 */
import {fromJS} from "immutable";
import {expect} from "chai";

import {addRoom} from "../../src/server/actionCreator";
import {makeStore} from "../../src/server/store";

describe("server store", ()=>{
    it("#dispatch actions",(done)=>{
        const mockStore = fromJS({
            rooms:[]
        });
        const store = makeStore(mockStore);

        store.subscribe(()=>{
            const state = store.getState();
            expect(state.get("rooms").size).to.equal(1);
            done();
        });

        store.dispatch(addRoom({
            name:"聊天室",owner:"terry"
        }))
    })
});