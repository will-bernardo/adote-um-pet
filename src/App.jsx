import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import MainPage from "./pages/MainPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import PetSelectPage from "./pages/PetSelectPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<MainPage/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/signup' element={<SignUpPage/>} />
              <Route path='/pet' element={<PetSelectPage/>} />
              <Route path='/pet/:id' element={<PetSelectPage/>} />
          </Route>
              <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
