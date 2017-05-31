import React from 'react';
import Title from '../components/atoms/Title/Title';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import ContentBlock from '../components/organisms/ContentBlock/ContentBlock';
import SkillsBlock from '../components/organisms/SkillsBlock/SkillsBlock';
import ContactBlock from '../components/organisms/ContactBlock/ContactBlock';

import skills from '../skills';

/**
 * This component will be rendered at the '/' url.
 */
const Home = () => (
  <section>
    <Title>Jared Meyering</Title>
    <ContentBlock header="About">
      <Paragraph>
        I‘ve been involved in programming for as long as I can
        remember. Messing around in BASIC during high school
        eventually became a career as a web and application
        developer.
      </Paragraph>
      <Paragraph>
        I‘m fluent in Go, Javascript, and PHP. I especially enjoy
        solving problems with well architected, SOLID solutions.
      </Paragraph>
      <Paragraph>
        My passion is web application development specifically
        developing fast and fluent RESTful API‘s.
      </Paragraph>
      <Paragraph>
        I‘m currently the technical lead
        at <a href="http://blend.marketing">Blend Marketing</a>
      </Paragraph>
    </ContentBlock>
    <SkillsBlock skills={skills} />
    <ContentBlock header="Open Source">
      <Paragraph>
        Open Source Software is near and dear to my heart. I‘m
        grateful to the countless of individuals who donate
        their time to make my job easier.
      </Paragraph>
      <Paragraph>
        I maintain a couple small libraries, mostly for working
        with API‘s. Giving back to the community in the form of
        OSS is something I will always continue to do.
      </Paragraph>
    </ContentBlock>
    <ContactBlock />
  </section>
);

export default Home;
