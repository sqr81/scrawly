export const UPDATE_SLUG = "UPDATE_SLUG";
export const UPDATE_TITLE ="UPDATE_TITLE";
export const UPDATE_CHOICES ="UPDATE_CHOICES";
export const SCRAWLY_SHOW_ERROR = "SCRAWLY_SHOW_ERROR";
export const SCRAWLY_SHOW_SUCCESS = "SCRAWLY_SHOW_SUCCESS";
export const SCRAWLY_CREATE_ERROR = "SCRAWLY_CREATE_ERROR";
export const SCRAWLY_CREATE_SUCCESS = "SCRAWLY_CREATE_SUCCESS";
export const CHOICES_CREATE_ERROR = "CHOICES_CREATE_ERROR";
export const CHOICES_CREATE_SUCCESS = "CHOICES_CREATE_SUCCESS";
export const CHOICES_SHOW_ERROR = "CHOICES_SHOW_ERROR";
export const CHOICES_SHOW_SUCCESS = "CHOICES_SHOW_SUCCESS";

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

export function updateChoices(choices) {
    return {
        type: UPDATE_CHOICES,
        payload: choices
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
    return { type: SCRAWLY_SHOW_ERROR};
}

export function choicesCreate(choices) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/choices', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(choices)

        })
            .then(response => response.json())
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(choicesCreateSuccess(data));
                } else {
                    dispatch(choicesCreateError());
                }
            })
    }
}
export function choicesCreateSuccess(choices) {
    return {
        type: CHOICES_CREATE_SUCCESS,
        payload: choices
    };
}
export function choicesCreateError() {
    return { type: CHOICES_CREATE_ERROR };
}

export function choicesShow(choices) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/choices')
            .then(response => response.json())
            .then(data => {
                if (data["hydra:member"].length > 0) {
                    dispatch(choicesShowSuccess(data["hydra:member"][0]));
                } else {
                    dispatch(choicesShowError());
                }
            })
    }
}
export function choicesShowSuccess(choices) {
    return {
        type: CHOICES_SHOW_SUCCESS,
        payload: choices
    };
}
export function choicesShowError() {
    return { type: CHOICES_SHOW_ERROR };
}