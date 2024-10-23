import IntervationReusableComponent from "./InterventionReusableComponent";
import Igisoro from "../../assets/meeting.jpg";
import Footer from "../Footer";

const CommunityLeaders = () => {
  const CommunityLeadersData = {
    title: "Community Leaders",
    imgSrc: Igisoro,
    listItems: [
      "What does it mean to be a leader in a community?",
    ],
  };
  return (
    <div>
      <div className="mb-5">
        <IntervationReusableComponent {...CommunityLeadersData} />
      </div>
      <div className="my-5 mx-5 text-justify">
        <div className="my-3">
          <p className="mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            tempora molestias dolor perferendis magnam, deleniti temporibus
            culpa animi aspernatur necessitatibus ipsam amet fugit officia
            doloribus incidunt harum dicta expedita.
          </p>
        </div>

        <div className="mb-5">
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

export default CommunityLeaders;
