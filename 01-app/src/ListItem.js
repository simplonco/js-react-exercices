import React from 'react';

const ListItem = (props) => <li key={props.id}>
  <button style={{backgroundColor: props.color}}
          onClick={() => props.changeColor(props.color)}>
    {props.name}
  </button>
</li>;

export default ListItem;
