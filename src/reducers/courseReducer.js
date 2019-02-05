// receive a state and action, and return a new state
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      /*
      // not immutable
      state.push(action.course);
      return state;
      */
      // return a new state instead of mutating the previous
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
