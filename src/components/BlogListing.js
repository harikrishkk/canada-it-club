import React from 'react';
import AllBlogHeader from './AllBlogHeader';
import Blog from './Blog';

export default function BlogListing({ blogs }) {
  return (
    <>
      <AllBlogHeader />
      <section>
        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map(({ id, frontmatter }) => (
              <div key={id} className="column is-9">
                <Blog
                  title={frontmatter.title}
                  subtitle={frontmatter.subtitle}
                  slug={frontmatter.slug}
                  date={frontmatter.date}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
