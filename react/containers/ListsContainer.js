import { connect } from 'react-redux'
import ListIndex from '../components/ListIndex'
import {
  fetchLists,
  deleteList,
 } from '../actions/listActions';

const mapStateToProps = state => {
  return {
    loaded: state.lists.loaded,
    lists: state.lists.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadLists: () => {
      dispatch(fetchLists())
    },

    destroyList: (id) => {
      dispatch(deleteList(id))
    }
  }
}


const ListsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex)

export default ListsContainer
