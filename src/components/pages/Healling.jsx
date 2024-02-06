import Healling_img from '../../assets/femme1.jpg'
import IntervationReusableComponent from './InterventionReusableComponent';
const Healling = () => {

  const HeallingData = {
    title: 'Healing, PeaceBuilding and Reconcilation',
    imgSrc: Healling_img,
    listItems: [
      'Community Based Socio-therapy-Mvura Nkuvure',
      'Active bystandership development - Sindebera',
      'Early warning and genocide ideology prevention and fighting',
      'Drugs abuse prevention - Reintegration',
      'Marriage and Family therapy',
      'Debriefing',
      'Healing the wounds of identity Conflicts(HWIC)'
    ]
  }
  return (
    <IntervationReusableComponent {...HeallingData} />
  );
}

export default Healling;