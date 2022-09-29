import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Main = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1664451694/sprint-start-pex_xwk9yo.jpg",
        name: "100m event",
        des: "The 100m sprint is currently the most anticipated and the highest viewed event in the Olympics.",
        time: "9-20 Sec",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1664451748/usain-bolt-sprint-pixabay_lskphf.jpg",
        name: "4 x 100 event",
        des: "The men's event has been a part of the games since 1912 and the women's event was added in 1928.",
        time: "40-80 Sec",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1664451746/hurdle-race-pixabay_krtbgy.jpg",
        name: "Hurdle Event",
        des: "For the men's 110m event, Liu Xiang of China holds the game during the 2004 Athens Olympics games.",
        time: "10-60 Sec",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1664451737/pole-vault-australia-pixa_nmttdm.jpg",
        name: "Pole Vault",
        des: "The pole vault is one of the 24 events that are contested disciple in the Olympics.",
        time: "10-20 Sec",
      },
      {
        id: 5,
        img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1664451733/marathon-pixabay_quw5nu.jpg",
        name: "Marathon",
        des: "The first-ever time that the marathon was raced was the first of two trial runs.",
        time: "1-5 Hour",
      },
      {
        id: 6,
        img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1664451728/javelin_olprla.jpg",
        name: "Javelin ",
        des: "Javelin throw is grouped as a part of the track & field events in the Olympics.",
        time: "15-30 Sec",
      },
    ];
    setDatas(data);
  }, []);

  return (
    <div>
      <p className="text-2xl pl-10 pb-10">Select Todays Game : </p>
      <div className="grid  grid-cols-3 gap-5 px-5">
        {datas.map((datta) => (
          <Card key={datta.id} data={datta}></Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
