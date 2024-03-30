import asset_img from "../../assets/gusura1.jpg";
import IntervationReusableComponent from "./InterventionReusableComponent";

const Asset = () => {
  const assetBasedCommunity = {
    title: "Asset Based community Development",
    imgSrc: asset_img,
    listItems: [
      "Ibiraro by'Umubire",
      "The gift that releases",
      "Cultural & Community Based Tourism",
      "Asset-Based Community Development (ABCD) is an approach that emphasizes the internal resources and strengths already present within a community to foster change and development. Rather than focusing on deficits and needs, ABCD encourages individuals and groups to identify and mobilize their skills, talents, and local resources. This can include tangible aspects such as physical infrastructure, as well as intangible resources like skills, cultural traditions, and social networks. By focusing on the community's assets, ABCD promotes autonomy, resilience, and the strengthening of social fabric, thus laying the groundwork for sustainable and inclusive development.",
    ],
  };
  return <IntervationReusableComponent {...assetBasedCommunity} />;
};

export default Asset;
