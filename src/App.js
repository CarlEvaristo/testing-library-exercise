import './App.css';
import {Link, Routes, Route} from "react-router-dom"
import CodeQuiz22 from './pages/CodeQuiz22';
import Home from './pages/Home';

export default function App() {


  return (
    <div>
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/CodeQuiz22">CodeQuiz22</Link>
            </li>

        </ul>
        </nav>

        <Routes>
            <Route exact path="/CodeQuiz22" element={<CodeQuiz22 />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

