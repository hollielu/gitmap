import React from 'react'
import {Menu, Header, Image} from 'semantic-ui-react'

const Navbar = () => (
  <Menu secondary>
    <Menu.Item style={styles.menu}>
      <Header as="h1">
        <Image
          src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
          circular
        />
        <Header.Content style={styles.header}>GitMap</Header.Content>
      </Header>
    </Menu.Item>
  </Menu>
)

const styles = {
  menu: {
    paddingTop: 10,
    paddingBottom: 10
  },
  header: {
    fontFamily: 'Do Hyeon'
  }
}

export default Navbar
