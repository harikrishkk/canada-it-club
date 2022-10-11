import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

const Hero = (props) => {
  const image = getImage(props.backgroundImage);
  const bgImage = convertToBgImage(image);
  return (
    <div>
      <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
        <div style={{ minHeight: 400, minWidth: 400 }}>
          <GatsbyImage image={image} alt={'testimage'} />
          <h1> {props.heading}</h1>
          <h2> {props.subHeading}</h2>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Hero;
