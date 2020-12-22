import React from 'react';

export default (props) => {
  return (
    <div>
      <p>{JSON.stringify(props)}</p>
      <input type="text"/>
    </div>
  )
}
