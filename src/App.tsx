import { Routes, Route } from 'react-router-dom'
import ErrorPage from "./errorPage";
import Home from "./pages/Home";
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App
