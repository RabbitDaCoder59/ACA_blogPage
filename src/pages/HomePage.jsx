import React from "react";
import { Link } from "react-router";
import { blogData } from "../utils/data";
const HomePage = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to Our Blog
        </h1>

        <ul className="space-y-4">
          {blogData.map((blogs) => (
            <li key={blogs.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                {blogs.tittle}
              </h3>
              <Link
                to={`/blog/${blogs.id}`}
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                See More
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
