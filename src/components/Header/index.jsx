import React from 'react';
import { Button } from '../common/Button.styled';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Image } from '../common/Imge.styled';
import { Typography } from '../common/Typography.styled';
import { List, ListItem, Logo, Nav, StyledHeader } from './Header.styled';

const listItems = [
  { name: 'Solutions', path: '/' },
  { name: 'Technology', path: '/' },
  { name: 'Company', path: '/' },
  { name: 'Resources', path: '/' },
  { name: 'Hangout', path: '/' },
  { name: 'Customers', path: '/' },
  { name: 'Blog', path: '/' },
  { name: 'Contact', path: '/' },
];

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Container>
          <Logo src='./images/insync-new-logo.png' alt='Logo' />
          <List>
            {listItems.map(lisItem => (
              <ListItem key={lisItem.name}>
                <a href='/'>{lisItem.name}</a>
              </ListItem>
            ))}
          </List>
        </Container>
      </Nav>
      <Container>
        <Flex>
          <div>
            <Heading>Connecting the Dots for Efficient Commerce</Heading>
            <HeadingTwo>
              We design, develop and integrate Digital Commerce Solutions that
              help you skyrocket your business, enable omnichannel commerce and
              improve efficiency
            </HeadingTwo>
            <Typography>
              Integration Platform | B2B eCommerce Solution | B2B Extensions
            </Typography>
            <Button>Get In Touch</Button>
          </div>
          <Image
            width='500px'
            src='https://cdn-dpjhd.nitrocdn.com/aqjaEmkLigAZctScLvSowCfARlGbdTTH/assets/static/optimized/rev-3e8a4cf/wp-content/uploads/2021/04/H1-copy.webp'
            alt='Landing'
          />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
