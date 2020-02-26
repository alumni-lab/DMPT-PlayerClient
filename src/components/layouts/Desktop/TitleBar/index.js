import React from 'react';
import styled from 'styled-components';
import { fonts, colours } from '../../../common/styles';
import moveImage from '../../../../images/moveImage.png';
import minimizeImage from '../../../../images/minimizeImage.png';

import Cookies from 'js-cookie';

let colour = colours[Cookies.get('theme')] || colours.base;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colour.secondary};
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
`
const BarButton = styled.img`
  width: 20px;
  height: 20px;
  margin: 1px;
`

const Title = styled.span`
  color: ${colour.primary}
`

const TitleBar = ({title, minimizeSection, position}) => {
  const minimize = (event) => {
   
    minimizeSection(event.target.id.charAt(0), event.target.id.charAt(1))
  }
  return (
    <TopBar>
      <BarButton src={moveImage}/>
      <Title>
        {title}
      </Title>
      <BarButton src={minimizeImage} onClick={minimize} id={position} />
    </TopBar>
  )
}

export default TitleBar;