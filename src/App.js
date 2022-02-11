import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage.jsx";
import SignupPage from "./pages/signup/SignupPage.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import BlogDetail from "./pages/dashboard/BlogDetail.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <div id="app_body" className="auth-wrapper">
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />
          <Route path="dashboard/blogDetail/:id"
            element={
              <ProtectedRoute>
                <BlogDetail />
              </ProtectedRoute>
            } />
        </Routes>
      </div>
    </div>
  );
}
export default App;