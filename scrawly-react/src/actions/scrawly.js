export const UPDATE_SLUG = "UPDATE_SLUG";

export function updateSlug(slug){
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}