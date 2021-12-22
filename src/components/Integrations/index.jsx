import React from 'react';
import { Button } from '../common/Button.styled';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import ItemList from '../ItemList';
import { StyledIntegration } from './Integrations.styled';

const integrations = [
  {
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Platform-1-86x86-1.png',
    text: 'Omnichannel Enablement',
    belowText: {
      text: 'Facilitating business scaling by allowing owners to sell through all channels, website, physical store and marketplaces.',
      color: '#fff',
    },
    highlighted: true,
  },
  {
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Easy-Integration-86x86-1.png',
    text: 'Omnichannel Enablement',
    belowText: {
      text: 'Facilitating business scaling by allowing owners to sell through all channels, website, physical store and marketplaces.',
      color: '#fff',
    },
    highlighted: true,
  },
  {
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Flexible-B2B__Platform-86x86-1.png',
    text: 'Omnichannel Enablement',
    belowText: {
      text: 'Facilitating business scaling by allowing owners to sell through all channels, website, physical store and marketplaces.',
      color: '#fff',
    },
    highlighted: true,
  },
];

function Integrations() {
  return (
    <StyledIntegration>
      <Container>
        <Flex direction='column' style={{ textAlign: 'center' }}>
          <Heading size='37px'>
            Experience the Power of Connected Commerce
          </Heading>
          <HeadingTwo>
            With our Digital Commerce Solutions, venture into the amazing world
            of integrated B2B Commerce. Like thousands of businesses around the
            globe, witness the power of an all-sustaining solution that
            streamlies and bring all your Commerce under one roof
          </HeadingTwo>
          <Flex style={{ justifyContent: 'space-between' }}>
            <Button>Explore Integrations</Button>
            <Button>Explore B2B Ecommerce</Button>
          </Flex>
          <Flex style={{ justifyContent: 'space-between' }}>
            <ItemList items={integrations} />
          </Flex>
        </Flex>
      </Container>
    </StyledIntegration>
  );
}

export default Integrations;
