import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from './Timer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
