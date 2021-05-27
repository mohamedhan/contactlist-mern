import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"
import Nav from './components/Nav';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/contact-list"  component={ContactList} />
      <Route path="/add-contact"  component={AddContact} />
    </div>
  );
}

export default App;
