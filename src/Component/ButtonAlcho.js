import React, { Component } from 'react';
import {FormGroup,Checkbox,ControlLabel} from 'react-bootstrap'
class ButtonAlcho extends Component {
  render() {
    return (
        <FormGroup validationState="success">
            <ControlLabel>ดื่มแอลกอฮอล์</ControlLabel>{' '}
            <Checkbox inline>ดื่ม</Checkbox>{' '}
            <Checkbox inline>ไม่ดื่ม</Checkbox>
            
        </FormGroup>
    );
  }
}

export default ButtonAlcho;
