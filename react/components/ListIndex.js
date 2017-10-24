import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class ListIndex extends React.Component {
  static propTypes = {
  }

  componentDidMount () {
    this.props.loadLists();
  }

  render () {
    const { lists, loaded, destroyList } = this.props;

    if (!loaded) {
      return (
        <p>Loading...</p>
      )
    }

    return (
        <ul>
          { lists.map( (list) => (
            <li key={list.id}>
              <Link to={`/lists/${list.id}`} key={list.id}> {list.name}</Link>
              <button onClick={() => destroyList(list.id)}>Remove</button>
            </li>
          ))}
        </ul>
    )
  }
}

ListIndex.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      items: PropTypes.array,
    }).isRequired
  ).isRequired,
  loadLists: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
}

export default ListIndex
