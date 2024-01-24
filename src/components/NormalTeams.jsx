import teams from "./TeamsData";

const Teams = () => {
  return (
    <div className="">
      <h1 className="text-2xl py-4 mt-5">Board Members</h1>
      <div className="grid grid-cols-1 bg-black/5 shadow-md my-2 rounded-md p-3 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teams.map((member) => (
          <div
            key={member.id}
            className="cursor-pointer hover:scale-95 duration-300 border-[1px] shadow-xl grid place-items-center p-2 rounded-xl"
          >
            <div className="">
              <img
                src={member.img}
                alt={member.name}
                className="w-96 h-96 md:w-64 md:h-64 p-1 object-cover rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              />
            </div>
            <h1 className="text-lg font-bold py-2 text-gray-800">
              {member.name}
            </h1>
            <h1>{member.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
