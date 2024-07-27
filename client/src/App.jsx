
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Auth from './pages/auth'
import Chat from './pages/chat'
import Profile from './pages/profile'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={ <Auth /> } /> {/* 'auth' 경로로 들어오면 Auth 페이지로 라우팅 */}
      <Route path="/chat" element={ <Chat /> } />
      <Route path="/profile" element={ <Profile /> } />

      <Route path="*" element={ <Navigate to="/auth" /> } /> {/* 정의되어 있지 않은 경로로 들어오면 auth 페이지로 navigate(Redirection) */}
    </Routes>
    </BrowserRouter>
  )
}

export default App