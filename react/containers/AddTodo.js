import React from 'react'
import { connect } from 'react-redux'
import { createListItem } from '../actions/todoActions'

let AddTodo = ({ match, createTodo }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          createTodo(match.params.list_id, input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // },
    createTodo: (id, name) => {
      console.log(name)
      dispatch(createListItem(id, name))
    }
  }
}

AddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodo)



export default AddTodo
