import React from 'react';
import Layout from '../components/Layout';
import BlogListing from '../components/BlogListing';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
export default function BlogsPaginated({ pageContext, data }) {
  const { currentPage, numOfPages } = pageContext;
  const { nodes } = data.allMarkdownRemark;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;

  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <Seo
        title="Blogs"
        description="Fresh Code Space blogs about technology"
      />
      <BlogListing blogs={nodes} />
      <div className="flex justify-center space-y-2 text-xs space-x-3">
        <div className="flex flex-col my-8">
          <div class="ml-2 mr-2 my-2">
            Page {currentPage} of {numOfPages}{' '}
          </div>
          <div className="flex justify-center">
            <Link
              className="button is-small mr-2"
              disabled={isFirst}
              to={`/blogs/${prevPage}`}
              rel="prev"
            >
              <BsArrowLeftSquare size={32} />
            </Link>{' '}
            <Link
              className="button is-small ml-2"
              disabled={isLast}
              to={`/blogs/${nextPage}`}
              rel="next"
            >
              <BsArrowRightSquare size={32} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          subtitle
          title
          slug
          date(formatString: "DD MMMM, YYYY")
          author
        }
      }
    }
  }
`;
