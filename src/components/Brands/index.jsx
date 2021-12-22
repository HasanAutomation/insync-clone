import React from 'react';
import Card from '../Card';
import { Button } from '../common/Button.styled';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Image } from '../common/Imge.styled';
import { Spacer } from '../common/Spacer.styled';
import { Typography } from '../common/Typography.styled';
import ItemList from '../ItemList';
import { StyledBrand } from './Brands.styled';

const tagLines = [
  {
    text: 'Seamless integration of multiple applications',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'Complex business processes automated',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'Streamlined business operations across the organization',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'How APPSeCONNECT helped Arani to seamlessly streamline their business applications',
    image:
      'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/01/Arani-Logo-AEC-150x65.png',
    belowText: {
      text: 'Read The Story >',
      color: '#95ca33',
    },
    highlighted: true,
  },
];

function Brands() {
  return (
    <StyledBrand>
      <Container direction='column'>
        <Image
          src='https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/02/INSYNC-Happy-Customers.jpg'
          alt='Brands'
        />
        <Heading size='40px' color='black'>
          Digital Commerce Solutions by INSYNC
        </Heading>
        <HeadingTwo color='black'>
          Our mission is to digitally transform modern-day organizations and
          offer them solutions that amplify their growth in the long run. With
          our Digital Commerce Solutions, we have successfully paved the way for
          thousands of businesses around the world towards perpetual success and
          growth.
        </HeadingTwo>
        <Flex>
          <div>
            <Heading color='black' size='37px'>
              APPSeCONNECT
            </Heading>
            <Typography>Integration Platform</Typography>
            <HeadingTwo color='black'>
              APPSeCONNECT is a smart and powerful Integration Platform as a
              Service (iPaaS) solution that seamlessly connects two or more
              business applications with one another
            </HeadingTwo>
            <Typography>
              Connect all your SaaS, on-premise applications, data sources and
              technologies under one single platform.
            </Typography>
            <Button>Get Started Now</Button>
          </div>
          <Image
            width='685px'
            src='https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/04/I1-copy-1024x574-1.webp'
            alt='Brand Logo'
          />
        </Flex>
        <Flex>
          <ItemList items={tagLines} />
        </Flex>
      </Container>
      <Spacer />
    </StyledBrand>
  );
}

export default Brands;
