import stories from "./LatestData";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className='p-5 mx-auto'>
      <h1 className="text-3xl sm:4xl md:5xl lg:6xl font-semibold underline underline-offset-8 decoration-blue-400 m-4">Latest News & Stories</h1>
      <div className="grid grid-col-1 gap-5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:gap-5 lg:grid-cols-3 py-5">
        {stories.map((story) => (
          <Link key={story.id} to="" className="sm:min-h-72 px-2 shadow-md rounded-sm shadow-blue-200 py-2 hover:scale-105">
            <img src={story.img} alt={story.title} className="sm:h-52 w-full object-cover py-1 rounded-lg" />
            <h1 className="text-2xl text-blue-500 font-mono">{story.title}</h1>
            <p className="text-md underline underline-offset-4 decoration-blue-400 py-2">{story.descrption.length > 50 ? story.descrption.slice(0, 50) + '...' : story.descrption}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default LatestNews;