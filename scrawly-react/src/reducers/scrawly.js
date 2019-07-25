import {
    UPDATE_SLUG,
    UPDATE_TITLE,
    UPDATE_CHOICES,
    SCRAWLY_SHOW_SUCCESS,
    SCRAWLY_CREATE_SUCCESS,
    CHOICES_CREATE_SUCCESS,
    CHOICES_SHOW_SUCCESS,
} from "../actions/scrawly";
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
        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: { ...state.scrawl, title: action.payload, slug: slugme (action.payload) }
            };
            case UPDATE_CHOICES:
            return {
                ...state,
                scrawl: { ...state.scrawl, choices: action.payload}
            };
        case SCRAWLY_SHOW_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        case SCRAWLY_CREATE_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        default:
            return state;

        case CHOICES_CREATE_SUCCESS:
            return {
                ...state,
                choices: action.payload
            };

        case CHOICES_SHOW_SUCCESS:
            return {
                ...state,
                choices: action.payload
            };
    };
}

export default scrawlyApp;