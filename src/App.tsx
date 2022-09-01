import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Layout } from "./components/Layout";
import { getToken } from "./utils";

function App() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const token = getToken();

  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          {token ? (
            <Route
              path="/profile"
              element={<ProfilePage setIsAuth={setIsAuth} />}
            />
          ) : (
            <Route path="*" element={<Navigate to={"/"} />} />
          )}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
