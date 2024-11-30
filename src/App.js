import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {Provider} from "./components/ui/provider"
function App() {
  return (
    <Provider>
        <Nav />
        <Header />
        <Main />
        <Footer />
    </Provider>


  );
}

export default App;
