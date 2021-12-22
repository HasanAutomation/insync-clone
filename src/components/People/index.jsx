import React from 'react';
import { Button } from '../common/Button.styled';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import ItemList from '../ItemList';
import { StyledPeople } from './People.styled';

const reviews = [
  {
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Platform-O-86x86-1.png',
    text: 'Expertise',
    belowText: {
      text: 'With 15+ years of experience, we deliver real results, transforming businesses.',
      color: '#fff',
    },
    transparent: true,
  },
  {
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/Quality_O-86x86-1.png',
    text: 'Quality',
    belowText: {
      text: 'The unique mix of our skills and our customer-focused process is followed for every project',
      color: '#fff',
    },
    transparent: true,
  },
  {
    icon: 'https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/11/growth_O-86x86-1.png',
    text: 'Growth',
    belowText: {
      text: 'We never stop learning and evolving in order to improve the results and striving to get there.',
      color: '#fff',
    },
    transparent: true,
  },
];

function People() {
  return (
    <StyledPeople>
      <Container>
        <Flex direction='column' style={{ textAlign: 'center' }}>
          <Heading size='37px'>Why People Choose Us</Heading>
          <Flex style={{ justifyContent: 'space-between' }}>
            <ItemList items={reviews} />
          </Flex>
          <Button>Explore Carrers</Button>
        </Flex>
      </Container>
    </StyledPeople>
  );
}

export default People;
