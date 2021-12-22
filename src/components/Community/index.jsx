import React from 'react';
import { Button } from '../common/Button.styled';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Image } from '../common/Imge.styled';

function Community() {
  return (
    <Container>
      <Flex>
        <div>
          <Heading color='black' size='37px'>
            Community
          </Heading>
          <HeadingTwo color='black'>
            Engage with the domain experts. Post questions, follow discussions,
            read documentation, share your knowledge, participate in forum
            discussions, explore the knowledge base.
          </HeadingTwo>
          <Button
            style={{
              backgroundColor: '#1064e6',
            }}
          >
            Get Started Now{' '}
          </Button>
        </div>
        <Image
          width='600px'
          src='https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/04/CP1-copy.webp'
          alt='Community'
        />
      </Flex>
    </Container>
  );
}

export default Community;
