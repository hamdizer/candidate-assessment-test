import { AppThunk } from "..";
import { DataSet, FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../types";

export const fetchAllCandidatesData = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
    const data: DataSet[] = await response.json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (err: any) {
    dispatch({ type: FETCH_ERROR, payload: err });
  }
};
