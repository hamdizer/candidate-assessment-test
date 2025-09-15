import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/candidate";
import React, { useEffect } from "react";
import { fetchAllCandidatesData } from "../../store/candidate/actions";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CandidateBarChart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.candidates
  );
  useEffect(() => {
    dispatch(fetchAllCandidatesData());
  }, [dispatch]);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error}</p>;
  const flattedData = data.flatMap((yearObj) =>
    Object.entries(yearObj).flatMap(([year, months]) =>
      months.flatMap((monthObj) =>
        Object.entries(monthObj).flatMap(([month, entries]) =>
          entries.map((entry) => {
            const [date, value] = Object.entries(entry)[0];
            return { name: date, value };
          })
        )
      )
    )
  );
  return (
    <ResponsiveContainer width="100%" height={700}>
      <BarChart
        data={flattedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey={"name"} angle={-45} textAnchor="end" height={80} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={"value"} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default CandidateBarChart;
