
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Profile name="prasa" lastname="vidanagamage">
        <h5>Thank you all</h5>
      </Profile>
      <Profile name="lahi" lastname="Amarasinghe"/>
      <Profile name="chamo" lastname="Liyanage"/>
    </div>
  );
}

export default App;
