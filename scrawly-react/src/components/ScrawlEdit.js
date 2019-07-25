import React, {Component} from 'react';
class ScrawlEdit extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.choicesCreate({
                date: this.props.scrawl.choices,
                poll: this.props.scrawl["@id"],
            }
        );
    }
    render() {
        return (
            <div>
                <section className="container form-new">
                    <h1>{this.props.scrawl.title}</h1>
                    <ul>
                        <li>
                            {this.props.scrawl.choices}
                        </li>
                    </ul>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="date" id="choice" value={this.props.scrawl.choices}  onChange={event => this.props.updateChoices(event.target.value)}/>
                        <button type="submit" className="button button-primary">
                            <i className="fa fa-plus"></i>
                            Ajouter
                        </button>
                    </form>
                    <a href="scrawl.html" className="button button-primary">
                        <i className="fa fa-check">Modifier</i>
                    </a>
                </section>
            </div>
        );
    }
}
export default ScrawlEdit;
