import React from 'react';

const HighlightedText = (props) => {
  return (
    <span className="font-semibold">{props.text}</span>
  );
}

export default HighlightedText;