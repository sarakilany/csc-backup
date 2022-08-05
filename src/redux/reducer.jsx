import { HAS_LOGED } from "./actiontypes";

const initialState = {
  has_loged: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HAS_LOGED:
      return {
        ...state,
        has_loged: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
