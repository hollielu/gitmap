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
          style={styles.ownerInput}
        />
        <Input
          name="repo"
          placeholder="Search repos..."
          onChange={handleChange}
          value={repo}
          style={styles.repoInput}
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
  ownerInput: {
    fontSize: '14px',
    marginRight: 10
  },
  repoInput: {
    fontSize: '14px',
    paddingRight: 10
  },
  button: {
    fontFamily: 'Do Hyeon',
    fontSize: '15px',
    marginLeft: 15
  }
}

export default Search
