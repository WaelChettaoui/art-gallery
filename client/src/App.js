import logo from './logo.svg'
import './App.css'
import Gallery from './components/gallery/Gallery'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Image Gallery</h1>
          <button>Upload</button>
        </div>
        <Switch>
          <Route path='/'>
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
