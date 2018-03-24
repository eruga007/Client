import React,{Component}from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom';


 export default class HomeMenu extends Component { 

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Drawer >
            <MenuItem containerElement ={<Link Link to={"/home/NationalID"}/>}>ตรวจสอบบัตรประชาชน</MenuItem>
            <MenuItem containerElement ={<Link Link to={"/home/register"}/>} > ลงทะเบียน </MenuItem>
            <MenuItem>รายชื่อ</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}
