import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SortDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = ()=> {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const {newest, oldest, random} = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle >SORT</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={newest}>NEWEST</DropdownItem>
          <DropdownItem onClick={oldest}>OLDEST</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={random}>RANDOM</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
