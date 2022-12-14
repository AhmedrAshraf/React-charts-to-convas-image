import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import EFD from "./components/EFD";
import Benchmark from "./components/Usage";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/admin/AdminRoute";
import FileUpload from "./components/admin/FileUpload";
import CreateAccount from "./components/admin/CreateAccount";
import CostForecast from "./components/KPI-EFC";

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <div>
          <Navbar />

          <Switch>
            <Route path="/login" component={Login} />

            <PrivateRoute exact path="/" component={Home} />

            <PrivateRoute path="/usage" component={Benchmark} />

            <PrivateRoute path="/EFD" component={EFD} />

            <AdminRoute path="/fileUpload" component={FileUpload} />

            <PrivateRoute path="/benchmarks" component={Benchmark} />


            <PrivateRoute path="/EFC" component={CostForecast}/>

            <AdminRoute path="/createAccount" component={CreateAccount} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
