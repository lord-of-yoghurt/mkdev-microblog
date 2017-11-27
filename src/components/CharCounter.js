import React from 'react';

const CharCounter = ({ max, length }) => (
  <div>
    Characters left: {max - length}
  </div>
);

export default CharCounter;
