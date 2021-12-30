import logo from './logo.svg'
import './App.css'
import Gallery from './components/gallery/Gallery'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddPainting from './components/addPainting/AddPainting'
import EditPainting from './components/editPainting/editPainting'
import Navbar from './navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/add" component={AddPainting} />
          <Route path="/edit/:id" component={EditPainting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;