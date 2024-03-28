const ShowCase = () => {
  return (
    <div className="p-2 mx-auto py-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-white border-2 border-blue-100 shadow-xl mx-4 px-2 rounded-md my-2">
          <h1 className="text-2xl md:text-3xl  my-2 font-semibold leading-loose">Mission</h1>
          <p className="text-justify text-[18px] sm:text-[16px] py-5 font-extralight leading-loose">
            Our mission is to empower individuals through community-based
            approaches aimed at establishing socio-therapeutic networks and
            fostering socio-economic and leadership development. We firmly
            believe that the overall well-being of a society hinges on the
            strength and resilience of its members. To achieve this goal, we
            implement innovative programs that foster social inclusion, enhance
            individual and collective skills, and encourage collaboration and
            partnership within communities.
          </p>
        </div>
        <div className="bg-white border-2 mx-4 px-2 shadow-xl border-blue-100 rounded-md my-2">
          <h1 className="text-2xl md:text-3xl text-black my-2 font-semibold leading-loose">
            Vision
          </h1>
          <p className="text-justify text-[18px] sm:text-[16px] py-5 font-extralight leading-loose">
            Our vision is to witness communities undergo integral transformation
            and empowerment, leading towards sustainable peace and development.
            We envision a future where every community is empowered to address
            its challenges effectively, fostering harmonious relationships and
            equitable opportunities for all. Through our initiatives, we strive
            to cultivate environments where individuals are not only resilient
            in the face of adversity but also actively engaged in shaping their
            collective destinies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
