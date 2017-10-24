import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends React.Component {

  componentDidMount () {
    this.props.loadItems(this.props.match.params.list_id);
  }

  componentWillUnmount() {;
    this.props.clearItems()
  }

  render () {
    const { todos, loaded, markDone, deleteItem, match: { params: { list_id }} } = this.props;

    if (!loaded) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            markDone={() => markDone(todo.id, list_id)}
            deleteItem={() => deleteItem(todo.id, list_id)}
          />
        ))}
      </ul>
    )
  }
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  // onTodoClick: PropTypes.func.isRequired
}

export default TodoList
