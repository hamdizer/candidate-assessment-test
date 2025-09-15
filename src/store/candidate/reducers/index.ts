import { CandidateAction, CandidateState } from "../types";

const initialState: CandidateState = {
  data: [],
  loading: false,
  error: null,
};
export function candidateReducer(
  state: CandidateState = initialState,
  action: CandidateAction
): CandidateState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS": {
      return { ...state, loading: false, data: action.payload };
    }
    case "FETCH_ERROR": {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}
