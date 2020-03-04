import React from "react";
import styled from "styled-components";
import { fonts, colours } from "../styles/index.js";
import Cookies from "js-cookie";
import ListItem from "../ListItem";

let colour = colours[Cookies.get("theme")] || colours.base;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 220px;
  max-width: 20vw;
  background-color: ${colour.background};
  font-family: ${fonts.main.family};
`;
const Title = styled.h4`
  color: ${colour.primary};
  font-size: ${fonts.main.size.medium};
`;

const ItemList = ({ items }) => {
  const list = items.map(item => <ListItem key={item.id} item={item} />);
  return (
    <ListContainer>
      <Title>Items</Title>
      {list}
    </ListContainer>
  );
};

export default ItemList;
