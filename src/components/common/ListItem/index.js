import React, { useState } from 'react';
import styled from 'styled-components';
import {fonts} from '../styles/index.js';


const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 220px;
  max-width: 20vw;
  box-shadow: 0px 0px 0px 1px rgba(155,155,155,0.3);
  margin: 0;
  font-family: ${fonts.main.family};
  transition: all 2s ease;
  `
const Title = styled.p`
  text-align: center;
  padding: 5px 0;
  margin: 0;
  width: 100%;
  cursor: pointer;
  // ${({ expanded }) => expanded && 'border-bottom: 1px solid black;'}
  color: #777;
  text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
  line-height: 33px;
  font-size: ${fonts.main.size.medium};
  background: #ffffff;
  background: -moz-linear-gradient(top, #ffffff 1%, #eaeaea 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1%,#ffffff), color-stop(100%,#eaeaea));
  background: -webkit-linear-gradient(top, #ffffff 1%,#eaeaea 100%);
  background: -o-linear-gradient(top, #ffffff 1%,#eaeaea 100%);
  background: -ms-linear-gradient(top, #ffffff 1%,#eaeaea 100%);
  background: linear-gradient(top, #ffffff 1%,#eaeaea 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eaeaea',GradientType=0 );
  box-shadow: 
      0px 0px 0px 1px rgba(155,155,155,0.3), 
      1px 0px 0px 0px rgba(255,255,255,0.9) inset, 
      0px 2px 2px rgba(0,0,0,0.1);
  `
const Description = styled.p`
  display: -webkit-box;
  max-height: ${({ show }) => show ? '6.5em' : '0px'};
  margin: ${({ show }) => show ? '10px 10px' : '0px 10px'};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  cursor: pointer;
  font-style: italic;
  color: #777;
  line-height: 23px;
  font-size: ${fonts.main.size.small};
  text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
`

const ListItem = ({ title, description, itemID }) => {
  const [expanded, setExpanded] = useState(false)
  const expand = () => {
    setExpanded(!expanded)
  }
  const showDetails = () => {
    // TODO push to modal common component when created
    console.log('Push to modal component here - Not implemented yet')
  }
  return (
    <Item key={itemID} >
      <Title onClick={expand} expanded={expanded} >
        {title}
      </Title>
      <Description show={expanded} onClick={showDetails}>
        {description}
      </Description>
    </Item>
  )
}

export default ListItem;