import React from 'react';
import ColorListItem from './ColorListItem';

const ColorList = (props) =>
<ul className="list-container">
  {
    props.colors.map( item =>
      <ColorListItem key={item.id} item={item} selectColor={props.changeColor}/>
    )
  }
</ul>;

export default ColorList;
