import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loading } from "./components";
import { useAppContext } from "./context/appContext";
import {
  Home,
  SelectGame,
  Login,
  EasyMenu,
  MediumMenu,
  HardMenu,
  ProfilePage,
  LevelPage,
  CustomGame,
  AboutPage,
  SettingsPage,
} from "./pages";

function App() {
  const { levels_loading: loading, darkMode } = useAppContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <div
      style={{
        backgroundColor: darkMode && "#000",
        transition: darkMode ? "all 1s ease" : "all 1s ease",
        color: darkMode ? "var(--dark-text)" : "black",
      }}
    >
      <Router>
        <Routes>
          <Route path="/register" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/selectGame" element={<SelectGame />} />
          <Route path="/selectGame/easy" element={<EasyMenu />} />
          <Route path="/selectGame/easy/:levelId" element={<LevelPage />} />
          <Route path="/selectGame/medium" element={<MediumMenu />} />
          <Route path="/selectGame/medium/:levelId" element={<LevelPage />} />
          <Route path="/selectGame/hard" element={<HardMenu />} />
          <Route path="/selectGame/hard/:levelId" element={<LevelPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/customGame" element={<CustomGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
