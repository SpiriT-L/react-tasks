import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NoteFound from './pages/NoteFound/NoteFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
