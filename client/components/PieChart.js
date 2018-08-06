import React, {Component} from 'react'
import ReactSvgPieChart from 'react-svg-piechart'
import {Header, Grid, Image, Message, Menu, Icon} from 'semantic-ui-react'

/**
 * COMPONENT
 */

class PieChart extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      contributions: 0,
      avatarUrl: '',
      url: ''
    }
    this.formatData = this.formatData.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.users !== prevProps.users) {
      this.setState({
        name: '',
        contributions: 0,
        avatarUrl: '',
        url: ''
      })
    }
  }

  formatData = users => {
    let data = []

    for (let i = 0; i < users.length; i++) {
      if (i % 2 === 0) {
        data.push({
          title: users[i].login,
          value: users[i].contributions,
          avatarUrl: users[i].avatarUrl,
          url: users[i].url,
          color: '#a5c9df'
        })
      } else {
        data.push({
          title: users[i].login,
          value: users[i].contributions,
          avatarUrl: users[i].avatarUrl,
          url: users[i].url,
          color: '#d2e4ef'
        })
      }
    }
    return data
  }

  render() {
    const {users} = this.props
    const {contributions, name, url, avatarUrl} = this.state
    return (
      <div style={styles.font}>
        <Header as="h1" content="Contribution By User" block />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <div style={styles.chart}>
                <ReactSvgPieChart
                  data={this.formatData(users)}
                  expandOnHover
                  onSectorHover={d => {
                    if (d) {
                      this.setState({
                        name: d.title,
                        contributions: d.value,
                        avatarUrl: d.avatarUrl,
                        url: d.url
                      })
                    }
                  }}
                />
              </div>
            </Grid.Column>

            <Grid.Column style={styles.grid}>
              {name !== '' ? (
                <Message style={styles.message}>
                  <Image src={avatarUrl} circular />
                  <Header as="h1">
                    <a href={url}>{name}</a>
                  </Header>

                  {contributions !== 0 ? (
                    <Menu compact>
                      <Menu.Item as="a">
                        <Icon name="github" />
                        {contributions}
                      </Menu.Item>
                    </Menu>
                  ) : (
                    ''
                  )}
                </Message>
              ) : (
                <Message style={styles.info}>
                  Hover over the chart on the left for more info.
                </Message>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

/**
 * STYLES
 */

const styles = {
  font: {
    fontFamily: 'Do Hyeon',
    fontSize: '20px'
  },
  chart: {
    height: 240,
    width: 200,
    marginLeft: 20,
    marginTop: 15
  },
  card: {
    width: 180,
    marginRight: 20
  },
  info: {
    marginTop: 50,
    marginRight: 70,
    width: 200
  },
  message: {
    marginTop: 10,
    marginRight: 60,
    height: 200,
    width: 200
  },
  grid: {
    textAlign: 'center'
  }
}

export default PieChart
