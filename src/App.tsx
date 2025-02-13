import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Arena } from "./pages/arena/Arena";
import { About } from "./pages/about/About";
import Layout from "./components/layout/Layout";
import AboutLayout from "./components/layout/AboutLayout";

function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/arena" />} />
        <Route
          path="/arena"
          element={
            <Layout>
              <Arena />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <AboutLayout>
              <About />
            </AboutLayout>
          }
        />
        <Route path="*" element={<Navigate to="/arena" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
