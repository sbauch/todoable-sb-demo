import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
const ShowList = (props) => (
  <div>
    <AddTodo {...props}/>
    <VisibleTodoList {...props} />
  </div>
)

export default ShowList
