import React from 'react';
import styled from 'styled-components';
import { fonts, colours } from '../styles/index.js';

const colour = colours.base; // set theme

const Modal = styled.div`
  font-family: ${fonts.main.family};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colour.backgroundDark};
  position: fixed;
  top: ${({ mobile }) => mobile ? '0' : '20%'};
  left: ${({ mobile }) => mobile ? '0' : '20%'};
  width: ${({ mobile }) => mobile ? '100vw' : '60%'};
  height: ${({ mobile }) => mobile ? '100vh' : '60%'};
  border: 2px solid ${colour.primaryShadow};
  border-radius: ${({ mobile }) => mobile ? '0' : '20px'};
  overflow: hidden;
`
const Title = styled.div`
  color: ${colour.primary};
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: ${fonts.main.size.large};
  font-weight: 700;
  border-bottom: 2px solid ${colour.primaryShadow};
  background-color: ${colour.quaternary};
  z-index: 5;

`
const Desctiprion = styled.div`
padding: 3%;
margin: 0;

`
const DescriptionText = styled.p`
color: ${colour.secondary};
margin: 0;

`
const ModalButtons = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  border-top:  2px solid ${colour.primaryShadow};
  padding: 10px 0;  
  background-color: ${colour.quaternary};
`

// TODO import common button component when created
const Button = styled.button`
  width: 33%;
  line-height: 1.5;
`
const CloseButton = styled.button`
  float: right;
  z-index: 6;
  padding: 1px;
  margin: 0 20px 0 0;
`

/*
  mobile: true = mobile display
  item: item object
  options: edit, delete
*/
const ItemModal = ({ item, mobile, options, closeModal }) => {
  const deleteItem = () => {
    // TODO add functionality when API hook is setup
    console.log('DELETE ITEM')
  }
  const editItem = () => {
    // TODO add functionality when API hook is setup
    console.log('EDIT ITEM')
  }


  return (
    <Modal mobile={mobile}>
      <Title>
        {item.title}
      <CloseButton onClick={closeModal}>
        X
      </CloseButton>
      </Title>
      <Desctiprion>
        <DescriptionText>
          {item.description}
        </DescriptionText>
      </Desctiprion>
      <ModalButtons>
        {options.delete && <Button onClick={deleteItem}>DELETE</Button>}
        {options.edit && <Button onClick={editItem}>EDIT</Button> }
      </ModalButtons>
    </Modal>
  )

}

export default ItemModal;