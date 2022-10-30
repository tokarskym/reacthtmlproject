import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import SpecialistsList from './Components/Specialists/SpecialistsList';
import OffersList from './Components/Offer/OffersList';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="header-section">
        <Header />
      </section>
      <section className="about-section" id="about">
        <div className="container">
          <h1 className="main-title specialist-title">Nasi specjaliści</h1>
          <SpecialistsList />
        </div>
      </section>
      <section className="offer-section" id="offer">
        <div className="container">
          <h1 className="main-title company-offer">Czym zajmuje się nasza firma?</h1>
          <OffersList />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
