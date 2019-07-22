import React from 'react';

function Homepage(props){
    return(
        <form>
            <input type="text" value={props.slug} onChange={event =>props.updateSlug(event.target.value)}/>
        </form>
    );
}

export default Homepage;