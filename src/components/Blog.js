import React from 'react';
import { Link } from 'gatsby';
import { BsArrowRight } from 'react-icons/bs';

export default function Blog({ title, date, subtitle, slug }) {
  return (
    <>
      <article className="flex flex-col">
        <Link to={`/blogs/${slug}`}>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src="https://source.unsplash.com/200x200/?fashion?1"
          />
        </Link>
        <div className="flex flex-col flex-1 p-6 bg-slate-50 min-h-[250px]">
          <Link
            to={`/blogs/${slug}`}
            className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
          >
            {date}
          </Link>
          <h3 className="py-2 text-lg font-semibold leading-snug">{title}</h3>
          <h4 className="text-sm leading-snug">{subtitle}</h4>
          <div className="flex justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <Link className="flex items-center" to={`/blogs/${slug}`}>
              <span className="mr-2"> Read More </span> <BsArrowRight />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
