import React from "react";
import PropTypes from 'prop-types';
import './Feedback-options.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className="options-list">
            {options.map(opt => <li key={opt}>
                <button className="btn" type="button" onClick={() => onLeaveFeedback(opt)}>{opt}</button>
            </li>)}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
