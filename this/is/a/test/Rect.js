import React from 'react';

export default ({ color }) => (
  <div>
    <svg width="100" height="100">
      <rect x="0" y="0" width="100" height="100" fill={color}/>
    </svg>
  </div>
)
