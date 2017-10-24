import React from 'react'
import { connect } from 'react-redux'
import { createListItem } from '../actions/todoActions'
import { updateList } from '../actions/listActions'

class ListHeader extends React.Component {

  constructor() {
    super()
    this.state = {
      editing: false
    }
  }

  render() {
    let input

    let { name, id, match, updateList } = this.props;

    return (
      <div>
        { this.state.editing ?
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }

              updateList(match.params.list_id, input.value)
              input.value = ''
              this.setState({editing: false})
            }}
          >
            <input
              placeholder={name}
              ref={node => {
                input = node
              }}
            />
            <button type="submit">
              Rename
            </button>
          </form>
        :
        <div>
            <p>{ name }</p>
            <button onClick={() => ( this.setState({ editing: true }))}>Rename</button>
        </div>

      }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    name: state.lists.selectedListName,
    id: state.lists.selectedListId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateList: (id, name) => {
      dispatch(updateList(id, name))
    }
  }
}

ListHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHeader)


export default ListHeader
