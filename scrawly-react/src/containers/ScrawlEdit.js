import { connect } from "react-redux";
import {updateChoices, choicesCreate, choicesShow} from "../actions/scrawly";
import ScrawlEdit from "../components/ScrawlEdit";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        poll: state.scrawly.scrawl["@id"],
    }
};
// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
        updateChoices: choices => dispatch(updateChoices(choices)),
        choicesCreate: choices => dispatch(choicesCreate(choices)),
        choicesShow: choices => dispatch(choicesShow(choices)),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlEdit)