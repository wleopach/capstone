import './App.css';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Login from './pages/Login';
import {Provider} from "./components/ui/provider"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Provider>
            <Router>


                <Routes>
                    <Route path="/" element={<Home/>} />{/* Default route    */}
                    {/* Add other routes here */}
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/about" element={<About />} /> */}
                </Routes>

            </Router>
        </Provider>


    );
}

export default App;
