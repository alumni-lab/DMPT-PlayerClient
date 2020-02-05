import React from 'react';
import styled from 'styled-components';
import {fonts, colours} from '../styles/index.js';

const Modal = styled.div`
  font-family: ${fonts.main.family};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${({ mobile }) => mobile ? '0' : '20%'};
  left: ${({ mobile }) => mobile ? '0' : '20%'};

`



const ItemModal = (mobile) => {

  return (
    <Modal mobile={mobile}>

    </Modal>
  ) 
  
}

export default ItemModal;