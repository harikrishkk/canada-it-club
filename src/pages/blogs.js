import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function Blogs({ data }) {
  return (
    <Layout>
      <h1>TEST</h1>
      {/* <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.relativePath}>
            <p>{node.relativePath}</p>
            <p>{node.extension}</p>
            <p>{node.birthTime}</p>
            <p>{node.prettySize}</p>
          </li>
        ))}
      </ul> */}
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        extension
        relativePath
        birthTime(fromNow: true)
        prettySize
      }
    }
  }
`;
