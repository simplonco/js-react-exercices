import React, {PropTypes} from 'react';

const ColorListItem = ({item, selectColor}) => {
  return (<li style={{backgroundColor: item.color}}
    onClick={() => selectColor(item.color)}>
    {item.name}
  </li>);
};

ColorListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  selectColor: PropTypes.func.isRequired
};

export default ColorListItem;
