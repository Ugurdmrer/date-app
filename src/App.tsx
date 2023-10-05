import { Routes, Route,Navigate} from 'react-router-dom'
import ErrorPage from "./errorPage";
import Home from "./pages/Home";
function App() {
  const loggedIn = true;
  return (
    <>
        <Routes>
          <Route path="/" element={ loggedIn ? (<Home />): (<Navigate replace to={"*"}/>)} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App
