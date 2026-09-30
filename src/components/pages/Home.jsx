import Navbar from "../common/Navbar";
import Hero from "../home/Hero";
import SmartShop from "../home/SmartShop";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SmartShop />
      </main>
    </>
  );
}

export default Home;
