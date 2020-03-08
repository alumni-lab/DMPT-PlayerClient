import React from 'react';
import styled from 'styled-components';
import { fonts, colours } from 'PATH /common/styles';// change PATH to src location
import Cookies from 'js-cookie';

// check for theme cookie
let colour = colours[Cookies.get('theme')] || colours.base;

const /*COMPONENT NAME*/ = ({ /* props */}) => {
  
  return (
    <>
    </>
  )
}



export default /*COMPONENT NAME*/;