import './App.css';
import ContactUs from './components/ContactUs';
import MyHero from './components/MyHero';
import MyServices from './components/MyServices';
import PriceTable from './components/PriceTable';

function App()
{
  return (
    <div>
      <MyHero />
      <div style={{ backgroundColor: "#1574b2" }}>
        <MyServices />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <PriceTable />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
