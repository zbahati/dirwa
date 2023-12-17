import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import ShowCase from "./ShowCase";
import TeamBehind from "./Teams";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ShowCase />
      <LatestNews />
      <TeamBehind />
    </div>
  );
}

export default Home;