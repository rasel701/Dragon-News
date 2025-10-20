import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { BsShare, BsBookmark } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    id,
    author,
    published_date,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <BsBookmark className="cursor-pointer hover:text-gray-700" />
          <BsShare className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>

        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-56 object-cover rounded-xl my-4"
        />

        <p className="text-gray-600 leading-relaxed">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <Link
            to={`/news-details/${id}`}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            {" "}
            Read More
          </Link>
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-4 border-t border-gray-100">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
