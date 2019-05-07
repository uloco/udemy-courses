import * as R from "ramda";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // return action.payload.reduce(
      //   (acc, value) => ({ ...acc, [value.id]: value }),
      //   {}
      // );
      // return { ...state, ..._.mapKeys(action.payload, 'id)}
      return { ...state, ...R.indexBy(R.prop("id"), action.payload) };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return R.dissoc(action.payload, state);
    // return _.omit(state, action.payload)
    // return { ...state, $delete: action.payload.id };
    default:
      return state;
  }
};
