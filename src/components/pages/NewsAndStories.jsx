import soccer_fan from "../../assets/playing.jpg";
import busasamana from "../../assets/busasamana work helping.jpg";
import busasamana_child from "../../assets/child-banner.jpg";
import school from "../../assets/school.jpg";
import group from "../../assets/group1.jpg";
import zigama from "../../assets/zigama.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const NewsAndStories = [
  {
    id: 1,
    img: soccer_fan,
    title: "DUMURURIZANYE SOCCER...",
    description:
      "Experience the power of compassion through Duhumurizanye Soccer. Join us on a journey where our NGO, Duhumurizanye, used the beautiful game of soccer to make a positive impact on communities in need. Discover how the love for the sport brought people together and helped us extend a helping hand to those who needed it most. Together, we kicked off change and scored big on hope and unity!",
  },
  {
    id: 2,
    img: busasamana,
    title: "BUSASAMANA HELPING EVENT...",
    description:
      "Join us for a heartwarming event in Busasamana where compassion and community come together. At our Busasamana Helping Event, we've rallied to make a meaningful difference in the lives of those in need. Witness the transformative power of kindness as we share love, support, and resources with our neighbors. Together, we're creating a brighter future, one act of generosity at a time.",
  },
  {
    id: 3,
    img: busasamana_child,
    title: "FUTURE WE MAKE...",
    description:
      "Discover the incredible potential within every child and the impact they can have on the future. Our 'Power of Child, Future We Make' initiative is a celebration of young minds and their ability to shape tomorrow. Join us as we nurture and empower the next generation, unlocking their limitless potential and guiding them towards a brighter and more promising future. Together, we are crafting a world where every child's dreams can become a reality.",
  },
  {
    id: 4,
    img: school,
    title: "WE SHARE IDEAS WITH ...",
    description:
      "Join us in our mission to inspire and educate. Through our 'We Share Ideas with School' program, we bridge the gap between knowledge and young minds. We believe in the power of collaboration and the exchange of innovative ideas. Together with schools, we're fostering a learning environment where creativity and inspiration thrive. Join us as we sow the seeds of knowledge and watch them flourish in the minds of our future leaders.",
  },
  {
    id: 5,
    img: group,
    title: "DUMURURIZANYE TRAINNINGS",
    description:
      "At Duhumurizanye, we're dedicated to empowerment through education. Our 'Duhumurizanye Training' program is your pathway to personal and professional growth. Join us as we provide comprehensive training that equips individuals with the skills, knowledge, and confidence needed to succeed. Unlock your potential and embark on a journey towards a brighter future with us.",
  },
  {
    id: 6,
    img: zigama,
    title: "ZIGAMA",
    description:
      "Duhumurizanye Save: It's more than just a word; it's a lifeline. At Duhumurizanye, we are committed to making a real difference in people's lives. 'Save' is our promise to provide support, assistance, and a helping hand when it's needed most. Join us in our mission to create a safer, more secure future for all.",
  },
];

const LatestNews = () => {
  return (
    <div className="">
        <h1 className="p-4 bg-[#6daefd] text-white font-semibold text-xl md:text-5xl">
        Latest News & Stories
      </h1>
    <div />
    <div>
        <h6 className="text-xs px-2 py-1">
          <a href="/">Home <i className="fas fa-chevron-right text-[10px]"></i> Latest News & Stories</a>
        </h6>
      </div>
      <h2 className="text-4xl my-5 text-start sm:4xl md:5xl lg:6xl mx-2">Latest News</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:gap-5 lg:grid-cols-3 mb-10 mx-2">
        {NewsAndStories.map((story) => (
          <Link key={story.id} to="" className="sm:min-h-72 px-2 shadow-md rounded-sm shadow-blue-200 py-2">
            <img src={story.img} alt={story.title} className="sm:h-52 w-full object-cover py-1 rounded-lg" />
            <h1 className="text-2xl text-blue-500 font-mono">{story.title}</h1>
            <p className="text-md underline underline-offset-4 decoration-blue-400 py-2">{story.description.length > 50 ? story.description.slice(0, 50) + '...' : story.description}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default LatestNews;
