import logo from './logo.svg';
import './App.css';
import Posts from './comp/Posts';
import Postname from './comp/Postname';
import Postdelete from './comp/Postdelete';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Postdelete/>
      <Postname/> */}
      <Posts/>
    </div>
  );
}

export default App;
