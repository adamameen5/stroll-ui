import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Prescriptions from './pages/Prescriptions';
import Results from './pages/Results';
import Patients from './pages/Patients';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Stroll UI</h1>
            <nav className="space-x-6">
              <Link to="/" className="hover:text-blue-500 transition-colors font-medium">Patients</Link>
              <Link to="/prescriptions" className="hover:text-blue-500 transition-colors font-medium">Prescriptions</Link>
              <Link to="/results" className="hover:text-blue-500 transition-colors font-medium">Results</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Patients />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>

        <footer className="text-center py-4 text-sm text-gray-400 border-t">
          © 2025 Stroll UI — adamameen5@gmail.com
        </footer>
      </div>
    </Router>
  );
}

export default App;
