import map from "../../assets/map.png";
import IntervationReusableComponent from "./InterventionReusableComponent";
import Footer from "../Footer";

const WhereWeWork = () => {
  const WhereWeWorkData = {
    title: "Where We Work",
    imgSrc: map,
    listItems: [],
  };

  return (
    <>
      <IntervationReusableComponent {...WhereWeWorkData} />
      <div className="mx-5 my-10 py-5">
        <h1 className="font-bold ">Kigali Province</h1>
        <p className="mx-10 mt-8 text-base mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          architecto aperiam nesciunt esse quam et fugiat maxime dolorem.
          Excepturi, vero. Totam velit nesciunt sit sequi in sunt deserunt
          nostrum modi, eum enim quisquam. Maiores officiis eveniet dicta
          dolorum doloribus possimus laudantium ullam, non perspiciatis nisi,
          quia sed cupiditate. Minima tempore doloribus, quasi commodi eos
          cumque! Dolorem doloremque maiores tenetur laudantium dolor debitis?
          Sunt autem velit repellat excepturi impedit laborum numquam, iure,
          ipsam asperiores eveniet error laboriosam minima.
          
        </p>

        <h1 className="font-bold ">Eastern Province</h1>
        <p className="mx-10 mt-8 text-base mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          architecto aperiam nesciunt esse quam et fugiat maxime dolorem.
          Excepturi, vero. Totam velit nesciunt sit sequi in sunt deserunt
          nostrum modi, eum enim quisquam. Maiores officiis eveniet dicta
          dolorum doloribus possimus laudantium ullam, non perspiciatis nisi,
          quia sed cupiditate. Minima tempore doloribus, quasi commodi eos
          cumque! Dolorem doloremque maiores tenetur laudantium dolor debitis?
          Sunt autem velit repellat excepturi impedit laborum numquam, iure,
          ipsam asperiores eveniet error laboriosam minima.
          
        </p>
        <h1 className="font-bold ">Southern Province</h1>
        <p className="mx-10 mt-8 text-base mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          architecto aperiam nesciunt esse quam et fugiat maxime dolorem.
          Excepturi, vero. Totam velit nesciunt sit sequi in sunt deserunt
          nostrum modi, eum enim quisquam. Maiores officiis eveniet dicta
          dolorum doloribus possimus laudantium ullam, non perspiciatis nisi,
          quia sed cupiditate. Minima tempore doloribus, quasi commodi eos
          cumque! Dolorem doloremque maiores tenetur laudantium dolor debitis?
          Sunt autem velit repellat excepturi impedit laborum numquam, iure,
          ipsam asperiores eveniet error laboriosam minima.
          
        </p>

        <h1 className="font-bold ">Western Province</h1>
        <p className="mx-10 mt-8 text-base mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          architecto aperiam nesciunt esse quam et fugiat maxime dolorem.
          Excepturi, vero. Totam velit nesciunt sit sequi in sunt deserunt
          nostrum modi, eum enim quisquam. Maiores officiis eveniet dicta
          dolorum doloribus possimus laudantium ullam, non perspiciatis nisi,
          quia sed cupiditate. Minima tempore doloribus, quasi commodi eos
          cumque! Dolorem doloremque maiores tenetur laudantium dolor debitis?
          Sunt autem velit repellat excepturi impedit laborum numquam, iure,
          ipsam asperiores eveniet error laboriosam minima.
          
        </p>
      </div>
      <Footer />
    </>
  );
};

export default WhereWeWork;
