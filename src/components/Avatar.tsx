import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  background: #060707;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 3px;
  text-decoration: none;
  position: fixed;
  top: 10px;
  right: 10px;
  width: 148px;
  transition: all 0.2s;

  :hover {
    background: #1e1e1e;
  }

  @media (min-width: 750px) {
    top: 20px;
    right: 40px;
  }
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 10px;
`;

const Label = styled.span`
  color: #fff;
  font-size: 13px;
`;

const Icon = styled.span`
  color: #fff;
  font-size: 10px;
  margin-left: 6px;
`;

interface AvatarProps {
  image: string;
  label: string;
  link: string;
}

export default function Avatar(props: AvatarProps): React.ReactElement {
  return (
    <Container href={props.link}>
      <Image alt={props.label} src={props.image} />
      <Label>{props.label}</Label>
      <Icon>▼</Icon>
    </Container>
  );
}
