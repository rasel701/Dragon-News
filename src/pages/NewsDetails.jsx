import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/homelaout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const datas = useLoaderData();

  useEffect(() => {
    const findNews = datas.find((item) => item.id == id);
    setNews(findNews);
  }, [id]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12  my-10 gap-5 p-3">
        <section className="col-span-9">
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
