import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Layout } from "./components/Layout";
import { getToken } from "./utils";

function App() {
  const [isAuth, setIsAuth] = useState(getToken());

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuth={setIsAuth} />} />
        {isAuth ? (
          <Route path="/profile" element={<ProfilePage />} />
        ) : (
          <Route path="*" element={<Navigate to={"/"} />} />
        )}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
