import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import FeaturedBlog from '../components/FeaturedBlog';
import BlogListing from '../components/BlogListing';
import SearchContainer from '../components/SearchContainer';
import Seo from '../components/Seo';
import Banner from '../components/Banner';
import TopicIntro from '../components/TopicIntro';
import Newsletter from '../components/Newsletter';
import { StaticImage } from 'gatsby-plugin-image';
import { BsArrowRight } from 'react-icons/bs';
import Testimonials from '../components/Testimonials';

export default function IndexPage({ data, pageContext }) {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <Seo
        title="Home"
        description="Code space is aiming to be the best platform to learn programming"
      />
      <Banner />
      <TopicIntro />

      <div className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="relative flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto">
            <div className="absolute top-0 left-0 z-0 opacity-80">
              <StaticImage
                alt="alt image"
                placeholder="blurred"
                src="https://images.unsplash.com/photo-1659386930859-a79d703e4d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </div>

            <div className="flex flex-col items-center p-8 py-12 text-center z-10">
              <h1 className="py-4 text-5xl font-bold">
                Featured Posts for this week
              </h1>
              <p className="pb-6">Check them out</p>
              <BsArrowRight size={40} />
            </div>
          </div>

          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
            <ul class="space-y-8 xl:space-y-10">
              {nodes.slice(0, 2).map((node) => (
                <div key={node.id}>
                  <FeaturedBlog blog={node} />
                </div>
              ))}
            </ul>
          </div>
        </div>
        <Testimonials />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          slug
          subtitle
          author
        }
      }
    }
  }
`;
