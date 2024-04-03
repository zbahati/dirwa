/* eslint-disable react/jsx-key */
import asset_img from "../../assets/gusura1.jpg";
import IntervationReusableComponent from "./InterventionReusableComponent";
import Footer from "../Footer";

const Asset = () => {
  const assetBasedCommunity = {
    title: "Asset Based community Development",
    imgSrc: asset_img,
    listItems: [
      "Ibiraro by Umubire", 
      "The gift that releases",
      "Cultural & Community Based Tourism",<br />,
      "Asset-Based Community Development (ABCD) is an approach that emphasizes the internal resources and strengths already present within a community to foster change and development. Rather than focusing on deficits and needs, ABCD encourages individuals and groups to identify and mobilize their skills, talents, and local resources. This can include tangible aspects such as physical infrastructure, as well as intangible resources like skills, cultural traditions, and social networks. By focusing on the community's assets, ABCD promotes autonomy, resilience, and the strengthening of social fabric, thus laying the groundwork for sustainable and inclusive development.",
    ],
  };
  return (
    <>
      <IntervationReusableComponent {...assetBasedCommunity} />
      <div className="mt-10 text-justify mx-5 mb-10">
        <p>
          <strong>Ibiraro by Umubire:</strong> <br /> The Gift that Releases In
          Rwandan culture, the concept of &ldquo;Ibiraro by Umubire&ldquo; holds
          significant meaning, symbolizing the transformative power of giving
          and receiving. It encapsulates the idea that through acts of
          generosity and sharing, individuals not only enrich the lives of
          others but also experience personal liberation and fulfillment. This
          ethos of reciprocity lies at the heart of Rwandan society, fostering
          strong communal bonds and a sense of interconnectedness among its
          people. <br />
          <br /> <strong>The Gift that Releases:</strong>
          <br />
          &ldquo;Ibiraro by Umubire&ldquo; embodies the belief that the act of
          giving is not merely a transactional exchange but rather a profound
          gesture that transcends material value. It signifies the liberation of
          both the giver and the receiver from constraints such as scarcity,
          selfishness, and isolation. Through giving, individuals open
          themselves up to the abundance of possibilities, forging deeper
          connections with others and nurturing a culture of empathy and
          solidarity. <br />
          <br />
          <strong>Cultural & Community-Based Tourism:</strong> <br />
          In Rwanda, cultural and community-based tourism represents a rich
          tapestry of experiences that showcase the country&lsquo;s vibrant
          heritage and traditions. From immersive cultural encounters with local
          communities to eco-friendly adventures in Rwanda&lsquo;s stunning
          landscapes, this form of tourism offers visitors a unique opportunity
          to engage with the authentic essence of the nation.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Asset;
