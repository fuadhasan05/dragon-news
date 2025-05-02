import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;

  // Function to format the date
  const formatDate = new Date(news.author.published_date).toLocaleDateString();

  // Function to render stars based on the rating
  const renderStars = (ratingNumber) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= ratingNumber) {
        stars.push(<AiFillStar key={i} className="text-orange-400 mr-1" />); // Filled star
      } else {
        stars.push(<AiOutlineStar key={i} className="text-gray-400 mr-1" />); // Outlined star
      }
    }
    return stars;
  };

  return (
    <div className="rounded-lg shadow-md p-5">
      {/* Author Section */}
      <div className="flex justify-between items-center bg-base-200 p-3 rounded-lg mb-4">
        <div className="flex items-center">
          <img
            src={author?.img}
            alt={author?.name || "Author"}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="font-bold">{author?.name || "Unknown Author"}</h4>
            <p className="text-sm text-gray-500">{formatDate}</p>
          </div>
        </div>
        <div className="flex gap-4 text-gray-500">
          <CiBookmark className="cursor-pointer" />
          <IoMdShare className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-xl mb-3">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-3"
      />

      {/* Details */}
      <p className="text-gray-700 mb-3">
        {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        <span className="text-orange-400 cursor-pointer font-bold"> Read More</span>
      </p>

      <hr className="my-3" />

      {/* Footer Section */}
      <div className="flex justify-between items-center text-gray-600">
        {/* Rating */}
        <div className="flex items-center">
          {renderStars(Math.round(rating?.number || 0))} {/* Render stars dynamically */}
          <span className="font-bold ml-2">{rating?.number || "N/A"}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <AiOutlineEye className="mr-1" /> {/* Eye Icon */}
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

const NewsList = ({ catagoryNews }) => {
  return (
    <div className="grid grid-cols-1 gap-5">
      {catagoryNews.map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default NewsCard;
export { NewsList };
