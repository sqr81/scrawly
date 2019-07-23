export const UPDATE_SLUG = "UPDATE_SLUG";
export const SCRAWLY_ADD = "SCRAWLY_ADD";
export const SCRAWLY_ADD_ERROR = "SCRAWLY_ADD_ERROR";
export const SCRAWLY_ADD_SUCCESS = "SCRAWLY_ADD_SUCCESS";
export const SCRAWLY_SHOW_ERROR = "SCRAWLY_SHOW_ERROR";
export const SCRAWLY_SHOW_SUCCESS = "SCRAWLY_SHOW_SUCCESS";


export function updateSlug(slug) {
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}

export function scrawlyAdd(scrawly) {
    let newScrawly = new scrawly();
    return  (dispatch) => newScrawly.save(scrawly)
        .then(
            success => dispatch(scrawlyAddSuccess(success)),
            error => dispatch(scrawlyAddError(error))
        );
}

export function scrawlyAddSuccess(scrawly) {
    return {
        type: SCRAWLY_ADD_SUCCESS,
        payload:  scrawly  };
}

export function scrawlyAddError(error) {
    return {
        type: SCRAWLY_ADD_ERROR,
        payload: error };
}

export function scrawlyShow(slug) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/polls?slug=' + slug)
            .then(response => response.json())
            .then(data => {
                if (data["hydra:member"].length > 0) {
                    dispatch(scrawlyShowSuccess(data["hydra:member"][0]));
                } else {
                    dispatch(scrawlyShowError());
                }
            })
    }
}

export function scrawlyShowSuccess(scrawl) {
    return {
        type: SCRAWLY_SHOW_SUCCESS,
        payload: scrawl
    };
}

export function scrawlyShowError() {}