import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {
  fetchListItems,
  clearListItems,
  markDone,
  deleteItem,
} from '../actions/todoActions';

const mapStateToProps = state => {
  return {
    todos: state.todos.items,
    loaded: state.todos.loaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    markDone: (id, listId) => {
      dispatch(markDone(id, listId))
    },

    deleteItem: (id, listId) => {
      dispatch(deleteItem(id, listId))
    },

    loadItems: (id) => {
      dispatch(fetchListItems(id))
    },
    clearItems: () => {
      dispatch(clearListItems)
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
