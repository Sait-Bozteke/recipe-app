import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Sait Bozteke </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Sait Bozteke</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Java, Hibernate, SpringBoot, AWS Services.
        </h4>
        <h2>
          <a href="mailto:sait.bozteke63@gmail.com">Send email</a> :
          sait.bozteke63@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;