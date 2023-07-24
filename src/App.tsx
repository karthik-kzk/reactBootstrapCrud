

import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from "react-router-dom";
import { useSelector} from "react-redux";
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
	const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute isSignedIn={isLoggedIn}>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
