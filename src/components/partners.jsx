import unhcr from "../../img/unhcr.png";
import rsb from "../../img/Logo-rsb.png";
import rwanda from "../../img/rwanda.png";
import action from "../../img/action.png";
import profocus from "../../img/profocus.png";

const Partners = () => {
  return (
    <div className="partners-container">
      <h1>Partners</h1>
      <div className="partner-card">
        <div className="partner-img">
          <img src={action} alt="logo for partners" />
        </div>
        <div className="partner-img">
          <img src={unhcr} alt="logo for partners" />
        </div>
        <div className="partner-img">
          <img src={profocus} alt="logo for partners" />
        </div>
        <div className="partner-img">
          <img src={rwanda} alt="logo for partners" />
        </div>
        <div className="partner-img">
          <img src={rsb} alt="logo for partners" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
