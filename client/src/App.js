import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddPainting from "./components/addPainting/AddPainting";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddPainting} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;