import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

export default class DropdownFood extends React.Component {
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
          <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle }>
            <DropdownToggle caret color="primary">
              แพ้อาหาร
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">มี</DropdownItem>
              <DropdownItem href="#">ไม่มี</DropdownItem>

            </DropdownMenu>
          </Dropdown>
      );
    }
  }