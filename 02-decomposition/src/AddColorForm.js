import React from 'react';
import Form from './Form';
import { SketchPicker } from 'react-color'; //https://casesandberg.github.io/react-color/#api-onChange
import Input from './Input';

const AddColorForm = (props) =>
  <Form onSubmit={props.addHandler} title="Add a new color">

    <Input
      name="colName"
      value={props.newColor.name}
      label="Color name"
      change={(e) => props.handleNewChange('name', e.target.value)}
    />

    <Input
      name="col"
      value={props.newColor.color}
      label="Color (hex)"
      change={(e) => props.handleNewChange('color', e.target.value)}
    />

    <SketchPicker
        color={props.newColor.color}
        onChangeComplete={ (color) =>
          props.handleNewChange('color', color.hex) }
      />

    <div>
      <button type="submit">Add</button>
    </div>

</Form>;

export default AddColorForm;
