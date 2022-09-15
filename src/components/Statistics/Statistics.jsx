import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <ul className="stat">
      <li className="stat-num">
        Good: <span className="stat-num">{good}</span>
      </li>
      <li className="stat-num">
        Bad: <span className="stat-num">{bad}</span>
      </li>
      <li className="stat-num">
        Neutral: <span className="stat-num">{neutral}</span>
      </li>
      <li className="stat-num">
        Total: <span className="stat-num">{total}</span>
      </li>
      <li className="stat-num">
        Positive:{' '}
        <span className="stat-num">
          {isNaN(positivePercentage) ? 0 : `${Math.round(positivePercentage)}%`}
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
