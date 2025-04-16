
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import P2P from './pages/P2P';
import P2PExpress from './pages/P2PExpress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<P2P />} />
        <Route path="/p2p-express" element={<P2PExpress />} />
      </Routes>
    </Router>
  );
}

export default App;
