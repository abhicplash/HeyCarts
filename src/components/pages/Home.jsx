import Navbar from "../common/Navbar";
import Hero from "../home/Hero";
import ShopperJourney from "../home/ShopperJourney";
import SmartShop from "../home/SmartShop";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SmartShop />
         <ShopperJourney />
      </main>
    </>
  );
}

export default Home;
