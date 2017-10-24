import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ markDone, deleteItem, status, name }) => (
  <li
    style={{
      textDecoration: status == "todo" ?  'none' : 'line-through'
    }}
  >
    {name}
    { status == "todo" ? <button onClick={markDone}>Done</button> : null }
    <button onClick={deleteItem}>Delete</button>
  </li>
)

Todo.propTypes = {
  markDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Todo
