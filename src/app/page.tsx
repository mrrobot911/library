import About from "./components/About";
import CoffeeShop from "./components/CoffeeShop";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import OurContacts from "./components/OurContacts";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main className="container mx-auto max-w-[1440px]">
      <Header />
      <Welcome />
      <About/>
      <Favorites/>
      <CoffeeShop />
      <OurContacts />
    </main>
  )
}
