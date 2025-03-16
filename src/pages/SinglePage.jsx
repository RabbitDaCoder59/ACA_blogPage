import React from "react";
import { Link, useParams } from "react-router";
import { blogData } from "../utils/data";

const SinglePage = () => {
  const { id } = useParams(); //http://localhost:5173//blog/:id this is exactly this /blog/:id this useParams fetch us th
  console.log(id); // is a string not a number. its coming as a string

  const singleBlog = blogData.find((blog) => blog.id === parseInt(id)); // this part is to change the id which is a string to number. cos === is strictly check equal to.. it checks if its the number and also data type

  // destructuring it
  const { tittle, content } = singleBlog; // its working this is destructuring in javascript
  // destructuring works in arrays and objects
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800">{tittle}</h1>

      <div className="">{content}</div>
      <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export default SinglePage;
