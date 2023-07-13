import About from "./components/About";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main className="container mx-auto max-w-[1440px]">
      <Header />
      <Welcome />
      <About/>
      <Favorites/>
    </main>
  )
}
