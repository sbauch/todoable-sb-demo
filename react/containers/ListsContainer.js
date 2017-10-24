import { connect } from 'react-redux'
import ListIndex from '../components/ListIndex'
import { fetchLists } from '../actions/listActions';

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
    }
  }
}


const ListsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex)

export default ListsContainer
