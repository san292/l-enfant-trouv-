import React, { useState } from 'react';
import { meeting, child, child1 } from '../../UI/images';
import styled from 'styled-components';
import { Flex } from '../../UI/styles/Flex';
import { Team } from './Team';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { data } from '../../data/data';

const About = () => {
  const dataText = data[0].texte;

  const [readMore, setReadMore] = useState(false);
  const limit = 700;
  const hendelToggleShowMore = () => {
    setReadMore(() => !readMore);
  };
  return (
    <ContainerAbout>
      <AboutUs>
        <h2>Le debut</h2>

        <Paragraph>
          {readMore ? dataText : dataText.substring(0, limit)}

          <UsButtonShowMore onClick={hendelToggleShowMore}>
            {readMore ? '...Lire moins' : '...Lire plus'}
          </UsButtonShowMore>
        </Paragraph>

        <h2>Conseil d'administartion</h2>
        <Flex>
          <Img src={meeting} alt="img" />
          <Paragraph>
            {readMore ? dataText : dataText.substring(0, limit)}

            <UsButtonShowMore onClick={hendelToggleShowMore}>
              {readMore ? '...Lire moins' : '...Lire plus'}
            </UsButtonShowMore>
          </Paragraph>
        </Flex>
      </AboutUs>
      <h2>Nos meilleurs souvenirs : </h2>
      <Flex>
        <Paragraph>
          {readMore ? dataText : dataText.substring(0, limit)}

          <UsButtonShowMore onClick={hendelToggleShowMore}>
            {readMore ? '...Lire moins' : '...Lire plus'}
          </UsButtonShowMore>
        </Paragraph>
        <Img src={child1} alt="img"></Img>
      </Flex>
      <h2>L'équipe </h2>

      <ContainerCarousel>
        <Carousel
          autoPlay
          axis="horizontal"
          verticalSwipe="natural"
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          width="90%"
          interval={3000}
          centerSlidePercentage={35}
          centerMode={true}
          stopOnHover
        >
          {Team.map((team) => (
            <DiveContainerTeam key={team.name}>
              <ImgCaroussel src={team.image} alt="img" />
              <h3>{team.name}</h3>
              <span>{team.role}</span>
            </DiveContainerTeam>
          ))}
        </Carousel>
      </ContainerCarousel>
    </ContainerAbout>
  );
};
const ContainerAbout = styled.div`
  width: 90%;
  margin: 0 auto 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Img = styled.img`
  border-radius: 0.6rem;
  width: 25rem;
  height: 10rem;
  object-fit: contain;
  margin-right: 0.5rem;
`;
const ImgCaroussel = styled.img`
  margin: 0.2rem 0;
  border-radius: 0.5rem;
  width: 20rem;
  height: 15rem;
  object-fit: contain;
`;

const Paragraph = styled.p`
  /* height: 15rem; */
`;
const DiveContainerTeam = styled.div`
  height: 100%;
  width: 90%;
`;
const ContainerCarousel = styled.div`
  width: 80rem;
  /* margin-left: 2rem; */
  /* background-color: blue; */
`;
const UsButtonShowMore = styled.button`
  margin-left: 1rem;
  border: 0.1rem solid var(--clr-secondary);
  width: 5rem;
  height: 2rem;
  color: var(--clr-grey-5);
  padding: 0.2rem 0;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  &:hover {
    color: var(--clr-green);
    background-color: var(--clr-white);
    transition-duration: 0.4s;
  }
`;

export default About;
