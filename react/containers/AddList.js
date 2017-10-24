import React from 'react'
import { connect } from 'react-redux'
import { createList } from '../actions/listActions'

let AddList = ({ createList }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          createList(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add New List
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
    createList: (name) => {
      dispatch(createList(name))
    }
  }
}

AddList = connect(
  null,
  mapDispatchToProps
)(AddList)



export default AddList
