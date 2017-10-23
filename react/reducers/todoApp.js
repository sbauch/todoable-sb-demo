const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? Object.assign(todo, {completed: !todo.completed})
          : todo
      )
    default:
      console.log(state)
      return state
  }
}

export default todos
