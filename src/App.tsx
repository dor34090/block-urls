import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import MainLayout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
