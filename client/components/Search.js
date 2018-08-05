import React from 'react'
import {Input, Button, Segment} from 'semantic-ui-react'

const Search = ({handleChange, handleSubmit, owner, repo}) => {
  return (
    <Segment padded floated="right">
      <span style={styles.font}>
        Enter the name of a GitHub repository and the owner to generate a map of
        the locations of its contributors.
      </span>
      <br />
      <br />
      <div>
        <Input
          name="owner"
          placeholder="Search owners..."
          onChange={handleChange}
          value={owner}
          style={styles.input}
        />
        <Input
          name="repo"
          placeholder="Search repos..."
          onChange={handleChange}
          value={repo}
          style={{paddingRight: 10}}
          style={styles.input}
        />
        <Button style={styles.button} onClick={handleSubmit}>
          Map It
        </Button>
        <br />
      </div>
    </Segment>
  )
}

const styles = {
  font: {
    fontSize: '20px'
  },
  input: {
    fontSize: '14px'
  },
  button: {
    fontFamily: 'Do Hyeon',
    fontSize: '15px',
    marginLeft: 15
  }
}

export default Search
