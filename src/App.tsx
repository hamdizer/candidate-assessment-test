import { Provider } from "react-redux";
import { store } from "./store/candidate";
import CandidateBarChart from "./components/candidate";

function App() {
  return (
    <Provider store={store}>
      <CandidateBarChart />
    </Provider>
  );
}

export default App;
