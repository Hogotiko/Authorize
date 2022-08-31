import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Layout } from "./components/Layout";

function App() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            path="/profile"
            element={<ProfilePage setIsAuth={setIsAuth} />}
          />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
