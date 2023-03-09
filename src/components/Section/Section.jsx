import PropTypes from 'prop-types';


export default function Section({ title }) {
    return (
        <h1>{title}</h1>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
};