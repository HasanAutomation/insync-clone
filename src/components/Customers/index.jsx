import React, { useState } from 'react';
import styled from 'styled-components';
import { customerImages, productsMap } from '../../mock';
import { Container } from '../common/Container.styled';
import { Flex } from '../common/Flex.styled';
import { Heading } from '../common/Heading.styled';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Image } from '../common/Imge.styled';
import { Typography } from '../common/Typography.styled';

const CustomerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  background-image: ${({ highlighted }) =>
    highlighted && 'linear-gradient(180deg, #6d68fe 0%, #b446ff 100%)'};
`;

function Customers() {
  const [hoveredComp, setHoveredComp] = useState(1);

  const data = productsMap[hoveredComp];

  return (
    <Container>
      <Flex direction='column' style={{ textAlign: 'center' }}>
        <Heading size='37px' color='black'>
          What our customers are saying
        </Heading>
        <Flex>
          {customerImages.map(customer => (
            <CustomerCard
              key={customer.id}
              onMouseEnter={() => setHoveredComp(Number(customer.id))}
              highlighted={hoveredComp === Number(customer.id)}
            >
              <Image src={customer.image} />
            </CustomerCard>
          ))}
        </Flex>
        <Flex style={{ textAlign: 'start' }}>
          <div>
            <Heading size='30px' color='black'>
              {data.title}
            </Heading>
            <HeadingTwo color='black'>{data.desc}</HeadingTwo>
            <Typography>{data.belowText}</Typography>
          </div>
          <Image src={data.image} />
        </Flex>
      </Flex>
    </Container>
  );
}

export default Customers;
