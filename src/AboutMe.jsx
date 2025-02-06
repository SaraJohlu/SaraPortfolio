// Making a profile card for my home side with information about me using props

import PropTypes from 'prop-types'
const AboutMe = ({name, student, country, age }) => {
    return(
        <section>
            <h1>My name is {name}</h1>
            <p>My age: {age}</p>
            <p>Current status: {student}</p>
            <p>I&apos;m from: {country}</p>
        </section>
    );
};

AboutMe.propTypes = {
    name: PropTypes.string.isRequired,
    student: PropTypes.string,
    country: PropTypes.string,
    age: PropTypes.number
};
export default AboutMe