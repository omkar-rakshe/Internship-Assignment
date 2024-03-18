import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import PostListScreen from './components/PostListScreen';
import SignUpScreen from './components/SignUpScreen';
import './styles/tailwind.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpScreen/>}/>
        <Route path='/post' element={<PostListScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
