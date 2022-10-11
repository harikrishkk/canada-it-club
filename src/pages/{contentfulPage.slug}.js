import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from '../components/RichText';

export default function ContentfulPage(props) {
  console.log(props);
  return (
    <div>
      <h1> Contentful - Testing </h1>
      <hr />
      <div>
        {props.data.contentfulPage.pageContent && (
          <RichText
            references={props.data.contentfulPage.pageContent.references}
            raw={props.data.contentfulPage.pageContent.raw}
          />
        )}
      </div>
    </div>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      slug
      pageContent {
        raw
        references {
          ... on ContentfulHeroBanner {
            __typename
            contentful_id
            heading
            subHeading
            backgroundImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
