import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
export default class DropdownName extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
        <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle } >
          <DropdownToggle caret color="primary" bsSize="small">
            คำนำหน้า
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">นาย</DropdownItem>
            <DropdownItem href="#">นางสาว</DropdownItem>
            <DropdownItem href="#">ด.ช.</DropdownItem>
            <DropdownItem href="#">ด.ญ.</DropdownItem>
          </DropdownMenu>
        </Dropdown>
    );
  }
}

