import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const Navbar = () => (
  <Menu attached="top">
    <Menu.Item name="home" as={Link} to="/">
      GitMap
    </Menu.Item>
  </Menu>
)

export default Navbar
