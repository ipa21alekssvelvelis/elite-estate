import './styles/App.css';
import IndexList from './components/IndexList.js';
import OpenDivs from './components/OpenDivs.js'
import CreateProfile from './components/CreateProfile';

function App() {
  return (
    <div className="container">
      <CreateProfile />
    </div>
  );
}

export default App;