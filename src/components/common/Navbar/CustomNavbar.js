import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
const CustomNavbar = (props) => {
  const { title } = props;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>{title}</NavbarBrand>
        <NavbarBrand href='/'>Logout</NavbarBrand>

      </Navbar>
    </div>
  )
}
export default CustomNavbar