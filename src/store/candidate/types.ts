export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_START = "FETCH_START";
export interface DataValueEntry {
  [dateTime: string]: number;
}
export interface MonthData {
  [month: string]: DataValueEntry[];
}
export interface YearData {
  [year: string]: MonthData[];
}
export interface DataSet {
  [year: string]: MonthData[];
}
export interface CandidateState {
  data: DataSet[];
  loading: boolean;
  error: string | null;
}
export type CandidateAction =
  | { type: typeof FETCH_START }
  | { type: typeof FETCH_SUCCESS; payload: DataSet[] }
  | { type: typeof FETCH_ERROR; payload: string };
