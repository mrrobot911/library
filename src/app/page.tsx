import About from "@/components/About";
import CoffeeShop from "@/components/CoffeeShop";
import DigitalLibraryCards from "@/components/DigitalLibraryCards";
import Favorites from "@/components/Favorites";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurContacts from "@/components/OurContacts";
import Scroll from "@/components/Scroll";
import Welcome from "@/components/Welcome";
import Providers from "@/utils/Provider";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1440px]">
      <Providers>
        <Header />
        <main>
          <Welcome />
          <About/>
          <Favorites/>
          <CoffeeShop />
          <OurContacts />
          <DigitalLibraryCards />
        </main>
        <Footer />
        <Scroll />
      </Providers>
    </div>
  )
}
