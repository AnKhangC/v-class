import { UPDATE } from './neighbours.types';

const INITIAL_STATE = {
  neighbours: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state, neighbours: action.payload,
      };

    default: return state;
  }
};

export default reducer;