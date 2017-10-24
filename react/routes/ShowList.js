import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import ListHeader from '../containers/ListHeader';

const ShowList = (props) => (
  <div>
    <ListHeader {...props} />
    <VisibleTodoList {...props} />
    <AddTodo {...props} />
  </div>
)

export default ShowList
