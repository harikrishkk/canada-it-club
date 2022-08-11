import React from 'react';
import { Link } from 'gatsby';
import { BsArrowRight } from 'react-icons/bs';
export default function FeaturedBlog({ blog }) {
  const { title, subtitle, date, slug, author } = blog.frontmatter;

  return (
    <>
      <li>
        <div className="pb-4 space-y-2">
          <span>
            {date} , {author}
          </span>
          <h1 className="text-3xl font-bold"> {title} </h1>
          <p>{subtitle}</p>
          <a
            rel="noopener noreferrer"
            href="#"
            className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
          >
            <Link to={`/blogs/${slug}`}>Read more</Link>
            <BsArrowRight />
          </a>
        </div>
      </li>
    </>
  );
}
