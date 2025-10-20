import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-7">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-4xl mt-4">{news.title}</h2>
      <p>{news.details}</p>
      <Link
        className="bg-secondary px-7 py-3 rounded-lg text-base-100"
        to={`/category/${news.category_id}`}
      >
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
