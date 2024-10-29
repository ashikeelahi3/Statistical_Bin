import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Playground from './pages/Playground';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';


export default function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/playground" element={<Playground />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<Profile />}/>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}
