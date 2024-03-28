import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import ShowCase from "./ShowCase";
import TeamBehind from "./Teams";
import Contact from "./contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ShowCase />
      <LatestNews />
      <TeamBehind />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;