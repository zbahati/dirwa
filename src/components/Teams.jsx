import Teams from "./NormalTeams";
import { president } from "./TeamsData";
const TeamBehind = () => {

  return (
    <div className="p-2 mx-auto">
      <h1 className="text-3xl underline underline-offset-8 decoration-blue-500 font-bold py-4 mt-5">Team Behind</h1>
      <div className="">
        <h1 className="text-2xl py-2">{president.map(president => (<span>{president.title}</span>))}</h1>
        {president.map(president => (
          <div key={president.id} className="grid grid-cols-1 gap-4 md:grid-cols-2 rounded-md bg-black/5 p-3 shadow-md my-2">
            <div className=" w-2/3 text-center border-[1px] shadow-lg rounded-lg hover:scale-95 duration-300">
              <img src={president.img} alt={president.name} className="w-full md:h-80 object-cover rounded-lg" />
              <h1 className="text-2xl font-bold py-2 text-gray-800">{president.name}</h1>
            </div>
            <div className=" self-center">
              <p className="text-justify text-blue-950 text-lg">{president.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Teams />
    </div>
  );
}

export default TeamBehind;