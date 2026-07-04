import { ReactLenis } from 'lenis/react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FooterReveal from "./components/layout/FooterReveal";
import WhatsAppButton from "./components/common/WhatsAppButton";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-brand-dark transition-colors duration-300">
      <Navbar />

      <main className="flex-1 relative z-10 bg-white dark:bg-brand-dark transition-colors duration-300 shadow-xl">
        <AppRoutes />
      </main>

      <FooterReveal>
        <Footer />
      </FooterReveal>
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
