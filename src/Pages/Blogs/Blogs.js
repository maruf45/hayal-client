import React from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <>
      <div  data-accordion="collapse" className="container mx-auto h-min my-[50px]">
        {blogs.map((blog) => {
          return (
            <>
              <h2 id={blog._id}>
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target={blog._id}
                  aria-expanded="true"
                  aria-controls={blog._id}
                >
                  <span>{blog.question}</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div id={blog._id}  aria-labelledby={blog._id}>
                <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    {blog.answer}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
