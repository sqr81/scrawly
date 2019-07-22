import {UPDATE_SLUG} from "../actions/scrawly"

const initialState = {
    scrawl: {
        title:"",
        slug:"Test",
        choices:[],
        person:[]
    }
}

function scrawlyApp (state = initialState, action){
    switch (action.type){
        case UPDATE_SLUG:
            let newState = Object.assign({}, state);
            newState.scrawl.slug = action.payload;
            return newState;
        default:
            return state;
    };
}

export default scrawlyApp;