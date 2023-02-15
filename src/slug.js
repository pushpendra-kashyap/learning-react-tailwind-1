import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

function Slug() {
  const params = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchABlog = () => {
      axios
        .get(`http://localhost:3000/blogs/${params.slug}`)
        .then((res) => {
          console.log(res);
          setBlog(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchABlog();
  }, [params.slug]);

  return (
    <div className="container mx-auto px-5 py-6">
      <h1 className="text-xl font-semibold">{blog.title}</h1>
      <p className="py-2 text-lg">{blog.description}</p>

      <div className="py-3 flex gap-5">
        {blog.tags.map((tag) => {
          return (
            <button className="bg-gray-200 px-4 py-1.5 rounded-sm">
              {tag.name}
            </button>
          );
        })}
      </div>

      <img src={blog.image.url} alt="blog img" />

      <div className="flex justify-center ">
        <div className="prose-xl w-5/6">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Slug;
