import React from 'react';
import { HeadingTwo } from '../common/HeadingTwo.styled';
import { Image } from '../common/Imge.styled';
import { Typography } from '../common/Typography.styled';
import { StyledCard } from './Card.styled';

function Card({
  item: { icon, text, highlighted, image, belowText, transparent },
}) {
  return (
    <StyledCard highlighted={highlighted} transparent={transparent}>
      {icon && <img src={icon} alt='icon' />}
      {image && <Image width='130px !important' src={image} alt='Image' />}
      <Typography color={highlighted || transparent ? 'white' : 'black'}>
        {text}
      </Typography>
      {belowText && (
        <HeadingTwo color={belowText.color}>{belowText.text}</HeadingTwo>
      )}
    </StyledCard>
  );
}

export default Card;
