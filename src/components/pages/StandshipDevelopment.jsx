import IntervationReusableComponent from './InterventionReusableComponent';
const Standship = () => {

  const standshipData = {
    title: 'Healing and Reconciliation (Integral phases)',
    listItems: [
      <div>
        <strong>Umusingi-Fondation</strong> <br /> The Healing the Wounds of identity Conflicts marks the fondation for DIR's programs. Under this program, DIR runs several workshops to accompagn affected people and communities in the journey of healing and reconciliation. The offered workshops include 94 Tutsis genocide survivors, offenders, and others sufferig from any trauma to find healing through forgiveness and reconciliation.
      </div>,
      <div>
        <strong>Mvura-Nkuvure (CBS)</strong> <br /> After the 3 days workshop, the participants are introduced in the process of CBS.They meet on weekly basis of 3 hours for 15 sessions, provinding to group members with a safe space to share their experiences in their healing process and support one another emotionally, socially and economically.The formed socio- groups serve as a platform where the foundation of community is rebuilt and trust is reestablished.
      </div>,
      <div>
        <strong>The Community Common Wealth (Umusangiro)</strong> <br /> Abasangiye Ubusa bitana ibisambo - Kandi akanwa karya ntiwumve iyo gatabaje ntikumvwa(Rwandan) In sustaining achieved social cohesion and prevent any destructive factor, it requires integral responses while adressing issues are facing communities like poverty, malnutrition, health and education.Umusangiro project uniquely attends to these.
      </div >
    ]
  };

  return (
    <IntervationReusableComponent {...standshipData} />
  );
}

export default Standship;
