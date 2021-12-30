import logo from './logo.svg'
import './App.css'
import Gallery from './components/gallery/Gallery'
import Form from './components/form/Form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Image Gallery</h1>
        </div>
        <Switch>
          <Route path='/'>
            <Form />
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
