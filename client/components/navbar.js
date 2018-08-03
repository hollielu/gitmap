import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Button} from 'semantic-ui-react'

const Navbar = () => (
  <Menu attached="top">
    <Button name="home" as={Link} to="/">
      GitMap
    </Button>
  </Menu>
)

export default Navbar
