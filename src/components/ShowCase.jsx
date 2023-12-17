const ShowCase = () => {
  return (
    <div className="p-2 mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-white border-2 border-blue-500 mx-2 px-2 duration-300 hover:scale-105 hover:duration-300 shadow-md rounded-md my-2">
          <h1 className="text-2xl md:text-3xl font-bold my-2">Mission</h1>
          <p className="text-justify text-[18px] sm:text-[16px] py-1">Our mission is to facilitate participants through community based approaches aiming at socio-therapy networks establishment, socio-economic and leadership development.</p>
        </div>
        <div className="bg-white border-2 mx-2 px-2 duration-300 shadow-lg border-blue-500 rounded-md my-2 hover:scale-105 hover:duration-300">
          <h1 className="text-2xl md:text-3xl text-black font-bold my-2">Vission</h1>
          <p className="text-justify text-[18px] sm:text-[16px] py-1">Our vision is to see communities integrally transformed and empowered towards the sustainable peace and development.</p>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;