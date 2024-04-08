import IntervationReusableComponent from "./InterventionReusableComponent";
import smiling from "../../assets/smiling.jpg";
import Footer from "../Footer";

const Refugees = () => {
  const RefugeesData = {
    title: "Refugees",
    imgSrc: smiling,
    listItems: [
      "The 1951 Refugee Convention declares that a refugee is someone who “owing to a well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group or political opinion, is outside the country of his nationality, and is unable to, or owing to such fear, is unwilling to avail himself of the protection of that country.",
    ],
  };
  return (
    <div>
      <div className="mb-10">
        <IntervationReusableComponent {...RefugeesData} />
      </div>
      <div className="my-5 mx-5 text-justify">
        <div className="my-3">
          <h1 className="font-bold"> Congolese Refugees: </h1>
          <p className="mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            tempora molestias dolor perferendis magnam, deleniti temporibus
            culpa animi aspernatur necessitatibus ipsam amet fugit officia
            doloribus incidunt harum dicta expedita.
          </p>
        </div>

        <div className="mb-5">
          <h1 className="font-bold"> Burundian Refugees:  </h1>
          <p className="mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            tempora molestias dolor perferendis magnam, deleniti temporibus
            culpa animi aspernatur necessitatibus ipsam amet fugit officia
            doloribus incidunt harum dicta expedita.
          </p>
        </div>

        <div className="mb-10">
          <h1 className="font-bold"> Other Refugees: </h1>
          <p className="mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            tempora molestias dolor perferendis magnam, deleniti temporibus
            culpa animi aspernatur necessitatibus ipsam amet fugit officia
            doloribus incidunt harum dicta expedita.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refugees;
