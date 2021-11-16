import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Headers from './containers/Headers';
import { ProductDetails } from './containers/ProductDetails';
import { ProductListening } from './containers/ProductListening';



function App() {
  return (
    <div className="App">
      <Router>
           <Routes>
             <Route path="/" element={<Headers/>}></Route>
             <Route path="/products" element={<ProductListening/>}></Route>
             <Route path="/products/:id" element={<ProductDetails/>}></Route>
             <Route >404 Not Found</Route>
           </Routes>

        </Router>

        
    </div>
  );
}

export default App;
