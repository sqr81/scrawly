import {UPDATE_SLUG, SCRAWLY_SHOW_SUCCESS} from "../actions/scrawly";
import slugme from "slugme";

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
            return {
                ...state,
                scrawl: { ...state.scrawl, slug: slugme (action.payload) }
            };
        case SCRAWLY_SHOW_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        default:
            return state;
    };
}

export default scrawlyApp;