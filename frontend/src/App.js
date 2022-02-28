import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  SelectGame,
  Login,
  EasyMenu,
  MediumMenu,
  HardMenu,
  ProfilePage,
  LevelPage,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/selectGame" element={<SelectGame />} />
        <Route path="/selectGame/easy" element={<EasyMenu />} />
        <Route path="/selectGame/easy/:level" element={<LevelPage />} />
        <Route path="/selectGame/medium" element={<MediumMenu />} />
        <Route path="/selectGame/medium/:levelId" element={<MediumMenu />} />
        <Route path="/selectGame/hard" element={<HardMenu />} />
        <Route path="/selectGame/hard/:levelId" element={<HardMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
