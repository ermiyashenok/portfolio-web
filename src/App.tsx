/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import FlowField from './components/FlowField';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen relative">
          {/* Global particle flow-field canvas */}
          <FlowField />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
