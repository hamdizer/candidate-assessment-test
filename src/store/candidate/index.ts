import { configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { candidateReducer } from "./reducers";
import { CandidateAction } from "./types";
const rootReducer = combineReducers({ candidates: candidateReducer });
export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, CandidateAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  CandidateAction
>;
