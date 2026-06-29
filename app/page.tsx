import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Flow from "./components/Flow";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <Flow />
      <Profile />
      <Contact />
      <Footer />
    </main>
  );
}
