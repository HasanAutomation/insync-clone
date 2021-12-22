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
    text: 'Easy User Management Create company accounts, contact persons, and sales reps with different roles and capabilities',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'Advanced Product Catalogues & Pricing Show your customers the products and price they are looking for and increase your sales',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'Flexible Checkout Options Let your customers checkout using various payment options including the power of Credit Limits',
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    highlighted: false,
  },
  {
    text: 'How APPSeCONNECT helped Richardson Sports to seamlessly streamline their business applications',
    image:
      'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/04/richardsonsports-white-logo-vector.png',
    belowText: {
      text: 'Read The Story >',
      color: '#95ca33',
    },
    highlighted: true,
  },
];

function Connect() {
  return (
    <Container direction='column'>
      <Flex>
        <div style={{ marginLeft: 30 }}>
          <Heading size='37px' color='black'>
            B2BeCONNECT
          </Heading>

          <Typography>B2B eCommerce Extension</Typography>
          <HeadingTwo color='black'>
            B2BeCONNECT is a robust and intelligent integrated B2B eCommerce
            extension that transforms any simple eCommerce store into a
            feature-rich B2B eCommerce platform.
          </HeadingTwo>
          <Button>Get Started Now</Button>
        </div>
        {/* <Spacer /> */}
        <Image
          width='500px'
          src='https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/04/B2B1-copy.webp'
          alt='Landing'
        />
      </Flex>
      <Flex style={{ marginTop: 40 }}>
        <ItemList items={tagLines} />
      </Flex>
    </Container>
  );
}

export default Connect;
