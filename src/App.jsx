import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layouts/Layout";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Layout>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </Layout>
      </ChakraProvider>
    </div>
  );
}

export default App;
