import React, { useState } from 'react';
import styled from 'styled-components';
import {fonts, colours} from '../../common/styles';
import TopBar from './TopBar';

let colour = colours.ocean;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${colour.background};
`


const MobileLayout = ({player}) => {
  
  return (
    <Container>
      <TopBar playerName={player.name} HP={player.HP} maxHP={player.maxHP} />
    </Container>
  )
}

export default MobileLayout;