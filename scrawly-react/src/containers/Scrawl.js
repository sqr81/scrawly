import { connect } from "react-redux";
import {  } from "../actions/scrawly";
import Scrawl from "../components/Scrawl";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};
// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scrawl)