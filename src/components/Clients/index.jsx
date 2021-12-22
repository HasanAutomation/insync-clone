import React from 'react';
import { Button } from '../common/Button.styled';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Image } from '../common/Imge.styled';
import { Typography } from '../common/Typography.styled';
import ItemList from '../ItemList';

const tagLines = [
  {
    image:
      'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/02/IC-Reverse-white-logo-220x95.png',
    text: 'Download Detailed INSYNC Commerce Brochure',
    highlighted: true,
    belowText: {
      text: 'Download Now >',
      color: '#95ca33',
    },
  },
  {
    text: 'Flexible B2B Platform Customize and expand your B2B functionalities with powerful commerce features.',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'Scalable Solution Connect your backend applications with your webstore and scale your business',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'Robust Integration Get an integrated experience right from the very beginning and never lose track of your data.',
    highlighted: false,
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
  },
];

function Clients() {
  return (
    <Container direction='column'>
      <Flex direction='row-reverse'>
        <div style={{ marginLeft: 30 }}>
          <Heading size='37px' color='black'>
            INSYNC COMMERCE
          </Heading>

          <Typography>Integrated B2B eCommerce Platform</Typography>
          <HeadingTwo color='black'>
            INSYNC Commerce is an end-to-end Integrated B2B eCommerce Solution
            specially made for Distributors, Wholesalers and Manufacturers for
            better digital adoption, quick launch and faster growth.
          </HeadingTwo>
          <Button>Get Started Now</Button>
        </div>
        {/* <Spacer /> */}
        <Image
          width='500px'
          src='https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/04/IC12-copyimg.webp'
          alt='Landing'
        />
      </Flex>
      <Flex style={{ marginTop: 40 }}>
        <ItemList items={tagLines} />
      </Flex>
    </Container>
  );
}

export default Clients;
