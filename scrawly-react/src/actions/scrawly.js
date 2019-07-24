export const UPDATE_SLUG = "UPDATE_SLUG";
export const UPDATE_TITLE ="UPDATE_TITLE";
export const SCRAWLY_SHOW_ERROR = "SCRAWLY_SHOW_ERROR";
export const SCRAWLY_SHOW_SUCCESS = "SCRAWLY_SHOW_SUCCESS";
export const SCRAWLY_CREATE_ERROR = "SCRAWLY_CREATE_ERROR";
export const SCRAWLY_CREATE_SUCCESS = "SCRAWLY_CREATE_SUCCESS";

export function updateSlug(slug) {
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}
export function updateTitle(title) {
    return {
        type: UPDATE_TITLE,
        payload: title
    };
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
export function scrawlyShowError() {
    return { type: SCRAWLY_SHOW_ERROR };
}

export function scrawlyCreate(scrawl) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/polls', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scrawl)

        })
        .then(response => response.json())
        .then(data => {
            if (data["@type"] !== "hydra:Error") {
                dispatch(scrawlyCreateSuccess(data));
            } else {
                dispatch(scrawlyCreateError());
            }
        })
    }
}
export function scrawlyCreateSuccess(scrawl) {
    return {
        type: SCRAWLY_SHOW_SUCCESS,
        payload: scrawl
    };
}
export function scrawlyCreateError() {
}
