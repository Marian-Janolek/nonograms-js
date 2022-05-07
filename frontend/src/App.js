import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loading } from "./components";
import { useAppContext } from "./context/appContext";

const Home = lazy(() => import("./pages/Home"));
const SelectGame = lazy(() => import("./pages/SelectGame"));
const Login = lazy(() => import("./pages/Login"));
const EasyMenu = lazy(async () => await import("./pages/EasyMenu"));
const MediumMenu = lazy(() => import("./pages/MediumMenu"));
const HardMenu = lazy(() => import("./pages/HardMenu"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LevelPage = lazy(async () => await import("./pages/LevelPage"));
const CustomGame = lazy(() => import("./pages/CustomGame"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const CustomDIfficulty = lazy(() => import("./pages/CustomDIfficulty"));
const ChoosePage = lazy(() => import("./pages/ChoosePage"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));

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
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/register" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectGame"
              element={
                <ProtectedRoute>
                  <SelectGame />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectGame/easy"
              element={
                <ProtectedRoute>
                  <EasyMenu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectGame/easy/:levelId"
              element={
                <ProtectedRoute>
                  <LevelPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectGame/medium"
              element={
                <ProtectedRoute>
                  <MediumMenu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectGame/medium/:levelId"
              element={
                <ProtectedRoute>
                  <LevelPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectGame/hard"
              element={
                <ProtectedRoute>
                  <HardMenu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectGame/hard/:levelId"
              element={
                <ProtectedRoute>
                  <LevelPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <AboutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/difficulty"
              element={
                <ProtectedRoute>
                  <CustomDIfficulty />
                </ProtectedRoute>
              }
            />
            <Route
              path="/difficulty/medium"
              element={
                <ProtectedRoute>
                  <ChoosePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/difficulty/hard"
              element={
                <ProtectedRoute>
                  <ChoosePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customGame"
              element={
                <ProtectedRoute>
                  <CustomGame />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
