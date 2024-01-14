import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import ShowCase from "./ShowCase";
import TeamBehind from "./Teams";
import Contact from "./contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ShowCase />
      <LatestNews />
      <TeamBehind />
      <Contact />
    </div>
  );
}

export default Home;