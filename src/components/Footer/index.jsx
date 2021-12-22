import React from 'react';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Image } from '../common/Imge.styled';
import { Input } from '../common/Input.styled';
import { StyledFooter } from './Footer.styled';

function Footer() {
  return (
    <StyledFooter>
      <Image
        width='100px'
        src='https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/02/insync-logo-white.png'
        alt='Footer logo'
      />
      <Flex start>
        <ul>
          <li>
            DGK 912, DLF Galleria, Action Area 1B, New Town, Kolkata – 700156,
            West Bengal, India
          </li>
          <li>+918240272336</li>
          <li>example@gmail.com</li>
        </ul>
        <ul>
          <li style={{ fontWeight: 'bold' }}>Solutions</li>
          <li>APPSeCONNECT</li>
          <li>INSYNC COMMERCE</li>
          <li>B2BeCONNECT</li>
        </ul>
        <ul>
          <li style={{ fontWeight: 'bold' }}>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>News</li>
          <li>Business Continuity Plan</li>
          <li>Employee Portal</li>
          <li>Partner Portal</li>
          <li>Careers</li>
          <li>Affilations</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li style={{ fontWeight: 'bold' }}>Resources</li>
          <li>Brand Assets</li>
          <li>Webinars</li>
          <li>Gaallery</li>
          <li>News Letters</li>
          <li>EBook</li>
          <li>Blog</li>
        </ul>
      </Flex>
      <Flex direction='column'>
        <HeadingTwo>Get our latest news right in your mailbox</HeadingTwo>
        <Input placeholder='Email address' />
      </Flex>
    </StyledFooter>
  );
}

export default Footer;
