import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import ContactUsHeader from '../components/ContactUsHeader';
import WhyUs from '../components/WhyUs';
import SendMessage from '../components/SendMessage';

export default function About({ data }) {
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn more about Code space methodology"
      />
      <ContactUsHeader />
      <WhyUs />
      <SendMessage />
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
`;
