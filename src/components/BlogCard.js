import React from 'react';

function BlogCard({ image, title, description }) {
  return (
    <div className="bg-gray-200 max-w-sm transition-all duration-200 hover:scale-90 cursor-pointer">
      <img src={image} alt="thumbnail" className="h-52 w-full object-cover" />
      <div className="px-2 py-4">
        <p className="text-xl font-semibold">{title}</p>
        <p>{description}</p>
        <button className="mt-3 px-4 py-2 bg-red-400 text-white rounded-sm">
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
