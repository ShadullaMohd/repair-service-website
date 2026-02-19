import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
// Import other pages lazily or directly. For this size, direct is fine.
import WashingMachineRepair from './pages/WashingMachineRepair';
import FridgeRepair from './pages/FridgeRepair';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import BrandRepair from './pages/BrandRepair';
import LocationRepair from './pages/LocationRepair';

// Placeholder components for pages not yet created to avoid build errors
// We will replace these file imports with actual files in the next steps.
// However, to ensure App.jsx is valid NOW, I will ensure those files exist or comment them out until created.
// Actually, I will create empty files for them now to prevent errors.

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/washing-machine-repair" element={<WashingMachineRepair />} />
          <Route path="/fridge-repair" element={<FridgeRepair />} />

          {/* Brand Specific Pages - Matching Sitemap */}
          <Route path="/lg-washing-machine-repair" element={<BrandRepair brand="lg" />} />
          <Route path="/samsung-washing-machine-repair" element={<BrandRepair brand="samsung" />} />
          <Route path="/whirlpool-washing-machine-repair" element={<BrandRepair brand="whirlpool" />} />
          <Route path="/ifb-washing-machine-repair" element={<BrandRepair brand="ifb" />} />
          <Route path="/godrej-washing-machine-repair" element={<BrandRepair brand="godrej" />} />
          <Route path="/haier-washing-machine-repair" element={<BrandRepair brand="haier" />} />
          <Route path="/panasonic-washing-machine-repair" element={<BrandRepair brand="panasonic" />} />
          {/* Location Specific Pages - SEO Strategy */}
          <Route path="/washing-machine-repair-in-madhapur" element={<LocationRepair location="Madhapur" />} />
          <Route path="/washing-machine-repair-in-gachibowli" element={<LocationRepair location="Gachibowli" />} />
          <Route path="/washing-machine-repair-in-kukatpally" element={<LocationRepair location="Kukatpally" />} />
          <Route path="/washing-machine-repair-in-hitech-city" element={<LocationRepair location="Hitech City" />} />
          <Route path="/washing-machine-repair-in-kondapur" element={<LocationRepair location="Kondapur" />} />
          <Route path="/washing-machine-repair-in-manikonda" element={<LocationRepair location="Manikonda" />} />
          <Route path="/washing-machine-repair-in-miyapur" element={<LocationRepair location="Miyapur" />} />
          <Route path="/washing-machine-repair-in-chandanagar" element={<LocationRepair location="Chandanagar" />} />
          <Route path="/washing-machine-repair-in-begumpet" element={<LocationRepair location="Begumpet" />} />
          <Route path="/washing-machine-repair-in-uppal" element={<LocationRepair location="Uppal" />} />

          {/* Near Ramanthapur */}
          <Route path="/washing-machine-repair-in-habsiguda" element={<LocationRepair location="Habsiguda" />} />
          <Route path="/washing-machine-repair-in-amberpet" element={<LocationRepair location="Amberpet" />} />
          <Route path="/washing-machine-repair-in-nagole" element={<LocationRepair location="Nagole" />} />
          <Route path="/washing-machine-repair-in-dilsukhnagar" element={<LocationRepair location="Dilsukhnagar" />} />
          <Route path="/washing-machine-repair-in-nacharam" element={<LocationRepair location="Nacharam" />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
