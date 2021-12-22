import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Typography } from '../common/Typography.styled';
import { StyledWorld } from './WorldWide.styled';

const numbers = [
  { upper: '1250+', lower: 'CUSTOMERS SERVED' },
  { upper: '150+', lower: 'PARTNERS' },
  { upper: '75+', lower: 'COUNTRIES' },
];

function WorldWide() {
  return (
    <StyledWorld>
      <Container>
        <Flex direction='column' style={{ textAlign: 'center' }}>
          <Heading color='#95ca33' size='37px'>
            Trusted by 1000+ businesses worldwide
          </Heading>
          <HeadingTwo>
            Our mission is to digitally transform modern-day organizations and
            offer them solutions that amplify their growth in the long run. With
            our Digital Commerce Solutions, we have successfully paved the way
            for thousands of businesses around the world towards perpetual
            success and growth.
          </HeadingTwo>
          <Flex
            style={{
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}
          >
            {numbers.map(({ upper, lower }) => (
              <div>
                <Heading size='100px'>{upper}</Heading>
                <Typography color='#95ca33'>{lower}</Typography>
              </div>
            ))}
          </Flex>
        </Flex>
      </Container>
    </StyledWorld>
  );
}

export default WorldWide;
