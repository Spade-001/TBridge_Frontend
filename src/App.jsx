import logo from './logo.svg';
import './styling/styles.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';
import Navbar from "./components/Navbar/Navbar";
import { 
  createBrowserRouter, 
  Routes, 
  Route, 
  createRoutesFromElements,
  RouterProvider} from "react-router-dom"; // For routing between components
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
