import React, { use } from "react";
import Marquee from "react-fast-marquee";
const fetchData = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
  const data = use(fetchData);

  const filterData = data.filter((item) => item.others.is_today_pick);
  const detailsItems = filterData.map((item) => item.details);
  console.log(detailsItems);
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary p-3">Latest</p>
      <Marquee pauseOnHover={true}>
        {detailsItems.map((text, index) => (
          <p className="font-semibold" key={index}>
            {text}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
