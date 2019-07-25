import React, { Component } from 'react';

class Scrawl extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>{this.props.scrawl.title}</h1>
                    <section className="container">
                        <table className="poll">
                            <thead>
                            <tr>
                                <th>
                                    <div className="date-container">
                                        <div className="month">Jan</div>
                                        <div className="date">12</div>
                                        <div className="day">Saturday</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="date-container">
                                        <div className="month">Jan</div>
                                        <div className="date">13</div>
                                        <div className="day">Sunday</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="date-container">
                                        <div className="month">Jan</div>
                                        <div className="date">19</div>
                                        <div className="day">Saturday</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="date-container">
                                        <div className="month">Jan</div>
                                        <div className="date">20</div>
                                        <div className="day">Sunday</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="date-container">
                                        <div className="month">Jan</div>
                                        <div className="date">26</div>
                                        <div className="day">Saturday</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="date-container">
                                        <div className="month">Jan</div>
                                        <div className="date">27</div>
                                        <div className="day">Sunday</div>
                                    </div>
                                </th>
                                <th />
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="user-container">
                                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=32" alt="picoudou" />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                                <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                                <td>
                                    <a href="scrawl.html">
                                        <i className="fa fa-2x fa-edit" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-container">
                                        <img src="https://www.gravatar.com/avatar/3f8389957d0c59bb0bd5433e86b53a19?s=32" alt="krusty" />
                                        <span>Jack Fieldman</span>
                                    </div>
                                </td>
                                <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td>
                                    <a href="scrawl.html">
                                        <i className="fa fa-2x fa-edit" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-container">
                                        <img src="https://www.gravatar.com/avatar/7fda1da9c34e978d5990afd7f58ca0f4?s=32" alt="krusty" />
                                        <span>Howard Thomson</span>
                                    </div>
                                </td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                                <td>
                                    <a href="scrawl.html">
                                        <i className="fa fa-2x fa-edit" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-form-container">
                                        <input type="email" name="email" placeholder="Email" />
                                        <input type="text" name="name" placeholder="Fullname" />
                                    </div>
                                </td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <button type="submit" className="button button-primary">
                                        <i className="fa fa-2x fa-save" />
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </React.Fragment>




        );
    }
}


export default Scrawl;