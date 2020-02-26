import React, { useState } from 'react';
import styled from 'styled-components';
import { fonts, colours } from '../../../common/styles';

// TODO change to svg so colour can change with themes
import menuImg from '../../../../images/menuImg.png';
import Cookies from 'js-cookie';

let colour = colours[Cookies.get('theme')] || colours.base;

const Bar = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid ${colour.secondary};
  background-color: ${colour.backgroundDark}
  `
const Menu = styled.img`
  margin: 0 0.5vh;
  height: 4vh;
  width: 4vh;
  color: ${colour.primary};
`

const Title = styled.span`
  color: ${colour.primary};
`

const HitPoints = styled.div`
  font-size: ${fonts.main.size.medium};
  color: ${colour.primary};
`
const HPDidplsy = styled.span`
  margin: 0 1vh;
  font-size: ${fonts.main.size.small};  
  font-weight: 700;
  color: ${({full}) => full ? colour.primary : '#cc0000'};
  background-color: ${({critical}) => critical ? '#ffd516' : colour.backgroundDark };
  padding: 0.2vh 0.5vh;
  border-radius: 1vh;
  `


const TopBar = ({ playerName, HP, maxHP}) => {
  const checkHP = () => {
    if (HP === maxHP) {
      return true;
    } else return false;
  }
  const criticallyLow = () => {
    if (HP < (maxHP / 10)) {
      return true
    } else return false;
  }

  return (
    <Bar>
      <Menu src={menuImg} />
      <Title>
        {playerName}
      </Title>
      <HitPoints>
        HP:
        <HPDidplsy full={checkHP()} critical={criticallyLow()} >
          {HP}/{maxHP}{HP < (maxHP / 10) ? ' 💔' : ' ♥'}
        </HPDidplsy>
      </HitPoints>
    </Bar>
  )
}



export default TopBar;