import React from 'react'
import {Menu, Header, Icon} from 'semantic-ui-react'

const Navbar = () => (
  <Menu pointing secondary>
    <Menu.Item style={styles.menu}>
      <Header>
        <Icon name="map marker alternate" /> GitMap
      </Header>
    </Menu.Item>
    <Menu.Menu position="right" style={styles.button} />
  </Menu>
)

const styles = {
  menu: {
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20
  }
}

export default Navbar
