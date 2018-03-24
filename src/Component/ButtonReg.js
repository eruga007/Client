import React, { Component } from 'react';
import {Button} from 'mdbreact'
import {Link} from 'react-router-dom'
class ButtonReg extends Component {
  render() {
    return (
        <div >
            <Button type="submit"><Link Link to={"/home/register/NationalIDcorrect"}>ลงทะเบียน</Link></Button>
        </div>
    );
  }
}

export default ButtonReg;
