import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './components/BlogCard';

function Home() {
  const navigate = useNavigate();
  console.log(navigate);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => {
      axios
        .get('http://localhost:3000/blogs')
        .then((res) => {
          // console.log(res.data);
          setBlogs(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="relative h-screen sm:h-[550px] ">
        <img
          src="https://dlearnerblog.netlify.app/_nuxt/img/homeImage.d05f027.jpeg"
          alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center h-full w-full bg-black bg-opacity-50">
          <div className="-mt-20 sm:mt-0">
            <h3 className="text-3xl sm:text-5xl font-bold text-white">
              DLearner
            </h3>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              you need to learn right now
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 px-5">
        <h4 className="text-3xl font-semibold text-center mb-5">Blogs</h4>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {blogs.length &&
            blogs.map((blog) => {
              return (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image.url}
                  readBlog={() => navigate(`/${blog._id}`)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
