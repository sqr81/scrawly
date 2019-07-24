import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from "react-router-dom";

class Homepage extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.show(this.props.slug);
    }

    render() {

        if (this.props.id) {
            return <Redirect to={"/scrawl/" + this.props.slug}/>
        }

        return(
            <div className="homepage bg-blue">
                <h1>Scrawly</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" placeholder="Scrawl slug" value={this.props.slug} onChange={event => this.props.updateSlug(event.target.value)}/>
                    <input type="submit" value="GO!"/>
                </form>
                <Link className="btn" to={"/scrawlnew"} >Créer un nouveau Scrawl</Link>
            </div>
        );
    }

}

export default Homepage;