// Props for the About component

import PropTypes from "prop-types";

const Information = ({name, underRub, information}) => {

    return(
        <>
        <h1>{name}</h1>
        <h2>{underRub}</h2>
        <p>{information}</p>
        </>
    );
}

Information.propTypes = {
    name: PropTypes.string.isRequired,
    underRub: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
};

export default Information