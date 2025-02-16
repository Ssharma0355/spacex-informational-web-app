import { useState, useEffect } from "react";
import { Error, HomePage, Capsules, Cores } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header, AuthModal } from "./components";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      {!isAuthenticated && (
        <AuthModal setIsAuthenticated={setIsAuthenticated} />
      )}
      {isAuthenticated && <Header setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/capsule"
          element={isAuthenticated ? <Capsules /> : <Navigate to="/" />}
        />
        <Route
          path="/cores"
          element={isAuthenticated ? <Cores /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
