import React from 'react'
import {Input, Button} from 'semantic-ui-react'

const Search = ({handleChange, handleSubmit, owner, repo}) => {
  return (
    <div>
      <Input
        name="owner"
        placeholder="Search users..."
        onChange={handleChange}
        value={owner}
      />
      <Input
        name="repo"
        placeholder="Search repos..."
        onChange={handleChange}
        value={repo}
        style={{paddingRight: 10}}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  )
}

export default Search
