import { connect } from "react-redux";
import { updateSlug, scrawlyShow } from "../actions/scrawly";
import Homepage from "../components/Homepage";
// import du composant

// Envoyer des données du state au composant
const mapStateToProps = state => {
    console.log(state)
    return {
        slug: state.scrawly.scrawl.slug
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    show: slug => dispatch(scrawlyShow(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)