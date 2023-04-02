import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NoteFound from './pages/NoteFound/NoteFound';
import AboutUs from './pages/AboutUs/AboutUs';
import Forms from './pages/Forms/Forms';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

// export function WrappedApp() {
//   return (
//     <HashRouter>
//       <App />
//     </HashRouter>
//   );
// }
