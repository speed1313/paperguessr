import React from 'react';
import PropTypes from 'prop-types';

function ReferenceOption(props) {
  return (
    <li className="referenceOption">
              {props.title}, {props.author}, {props.year}
    </li>
  );
}

ReferenceOption.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
};

export default ReferenceOption;
