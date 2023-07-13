import About from "./components/About";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1440px]">
      <Header />
      <Welcome />
      <About/>
    </div>
  )
}
