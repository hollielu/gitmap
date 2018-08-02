import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu, Button} from 'semantic-ui-react'

export const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu attached="top">
    <Menu.Item name="home" as={Link} to="/">
      Home
    </Menu.Item>
    <Menu.Menu position="right">
      {isLoggedIn ? (
        <Menu.Item>
          {/* The navbar will show these links after you log in */}
          <Button onClick={handleClick}>Logout</Button>
        </Menu.Item>
      ) : (
        <Menu.Item>
          {/* The navbar will show these links before you log in */}
          <Button as={Link} to="/signup" primary>
            Sign Up
          </Button>
          <Button as={Link} to="/login">
            Login
          </Button>
        </Menu.Item>
      )}
    </Menu.Menu>
  </Menu>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
