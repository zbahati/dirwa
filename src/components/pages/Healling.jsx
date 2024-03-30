import Healling_img from "../../assets/femme1.jpg";
import IntervationReusableComponent from "./InterventionReusableComponent";
import Footer from "../Footer";

const Healling = () => {
  const HeallingData = {
    title: "Healing, Peacebuilding, and Reconciliation",
    imgSrc: Healling_img,
    listItems: [
      "► Community-Based Socio-therapy - Mvura Nkuvure",
      "► Active Bystandership Development - Sindebera",
      "► Early Warning and Genocide Ideology Prevention and Fighting",
      "► Drug Abuse Prevention and Reintegration",
      "► Marriage and Family Therapy",
      "► Debriefing",
      "► Healing the Wounds of Identity Conflicts (HWIC)",
    ],
  };

  return (
    <>
      <IntervationReusableComponent {...HeallingData} />
      <div>
        <p className="mx-10 mt-8 text-base mb-8">
          If you are interested in donating cash, clothing, shoes, or other
          items for refugees living in Rwanda, please contact our Kigali Office
          at +250 (0) 252-589-822 or email the Dirwa Rwanda Operation External
          Relations Office at rwakipi@dirwa.org. If you are interested in
          supporting Dirwa&apos;s work globally, please click here to donate
          online or find information for your national office.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Healling;
