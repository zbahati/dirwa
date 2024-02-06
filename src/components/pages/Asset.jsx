import asset_img from '../../assets/gusura1.jpg';
import IntervationReusableComponent from './InterventionReusableComponent';

const Asset = () => {
  const assetBasedCommunity = {
    title: 'Asset Based community Development',
    imgSrc: asset_img,
    listItems: [
      "Ibiraro by'Umubire",
      "The gift that releases",
      "Cultural & Community Based Tourism"
    ]
  }
  return (
    <IntervationReusableComponent {...assetBasedCommunity} />
  );
}

export default Asset;