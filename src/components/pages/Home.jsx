import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import FinalCTA from "../home/FinalCTA";
import Hero from "../home/Hero";
import LifestyleExperience from "../home/LifestyleExperience";
import ShopperJourney from "../home/ShopperJourney";
import SmartShop from "../home/SmartShop";
import ValueForEveryone from "../home/ValueForEveryone";

function Home() {
  return (
    <>

      <main>
        <Hero />
        <SmartShop />
        <ShopperJourney />
        <LifestyleExperience />
        <ValueForEveryone />
        <FinalCTA />
      </main>
    </>
  );
}

export default Home;
