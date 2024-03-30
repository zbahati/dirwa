import InterventionReusableComponent from "./InterventionReusableComponent";
import Footer from "../Footer";

const Standship = () => {
  const standshipData = {
    title: "Healing and Reconciliation (Integral phases)",
    listItems: [
      <>
        <strong>Umusingi-Fondation</strong> <br /> The Healing the Wounds of
        Identity Conflicts marks the foundation for DIR&apos;s programs. Under
        this program, DIR runs several workshops to accompany affected people
        and communities on the journey of healing and reconciliation. The
        offered workshops include 94 Tutsis genocide survivors, offenders, and
        others suffering from any trauma to find healing through forgiveness and
        reconciliation.
      </>,
      <>
        <strong>Mvura-Nkuvure (CBS)</strong> <br /> After the 3-day workshop,
        the participants are introduced to the process of CBS. They meet on a
        weekly basis for 3 hours over 15 sessions, providing group members with
        a safe space to share their experiences in their healing process and
        support one another emotionally, socially, and economically. The formed
        socio-groups serve as a platform where the foundation of community is
        rebuilt and trust is reestablished.
      </>,
      <>
        <strong>The Community Common Wealth (Umusangiro)</strong> <br />{" "}
        Abasangiye Ubusa bitana ibisambo - Kandi akanwa karya ntiwumve iyo
        gatabaje ntikumvwa (Rwandan) In sustaining achieved social cohesion and
        preventing any destructive factors, it requires integral responses while
        addressing issues facing communities like poverty, malnutrition, health,
        and education. The Umusangiro project uniquely attends to these.
      </>,
    ],
  };

  return (
    <>
      <InterventionReusableComponent {...standshipData} />
      <div className="px-10 py-10 ">
        <h1 className="font-semibold text-2xl">
          Umusingi Foundation: Fostering Healing and Reconciliation in Rwanda
        </h1>
        <p className="mt-10 leading-loose">
           In the aftermath of identity conflicts that have scarred
          Rwandan communities, the Umusingi Foundation stands as a beacon of
          hope, dedicated to healing the wounds of the past and forging a path
          towards reconciliation. At the heart of the foundation&apos;s mission lies
          the Healing the Wounds of Identity Conflicts program, which serves
          as the cornerstone for its transformative initiatives. Central to the
          foundation&apos;s efforts are the workshops designed to guide affected
          individuals and communities through the delicate process of healing
          and reconciliation. These workshops, tailored to various groups
          including survivors of the Tutsis genocide, offenders, and individuals
          grappling with trauma, provide a safe and supportive environment for
          participants to embark on a journey towards forgiveness and healing.
          Following these initial workshops, participants transition into the
          Community-Based Support (CBS) program—a pivotal phase in their healing
          journey. Through weekly meetings over a 15-session period, individuals
          come together to share their experiences, provide mutual support, and
          rebuild the social fabric that has been frayed by years of conflict
          and trauma. Within these socio-groups, bonds are formed, trust is
          nurtured, and the foundations of community are strengthened. Beyond
          addressing the scars of past conflicts, the Umusingi Foundation
          recognizes the importance of addressing ongoing challenges facing
          Rwandan communities. The Community Common Wealth (Umusangiro) project
          exemplifies this commitment by providing integral responses to issues
          such as poverty, malnutrition, health, and education. By tackling
          these challenges head-on, the foundation not only fosters social
          cohesion but also empowers communities to build a brighter and more
          resilient future. In a country still grappling with the legacy of its
          past, the Umusingi Foundation serves as a beacon of hope, embodying
          the resilience and spirit of reconciliation that defines Rwanda&apos;s
          journey towards healing and renewal. Through its holistic approach to
          community development and reconciliation, the foundation continues to
          inspire change, transform lives, and sow the seeds of a more peaceful
          and prosperous future for all Rwandans.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Standship;
