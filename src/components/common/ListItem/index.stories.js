import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from './index';

const shortItem = {
  id: 1,
  itemType: 'Note',
  title: 'Some Item',
  description: 'This is a short description'
}
const longItem = {
  id: 2,
  itemType: 'Note',
  title: 'Some Long Item',
  description: 'Lorem ipsum\n dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.'
}
const modalTemp = (item, options) => {
  console.log(`Modal to display:\n${item.title}\n${item.description}`)
  options && console.log(`Options:\nDelete: ${options.delete}\nEdit: ${options.edit}`)
}

storiesOf('Common/ListItem', module)
  .add('ShortDescription', () => <ListItem item={shortItem} modal={modalTemp} />)
  .add('LongDescription', () => <ListItem item={longItem} modal={modalTemp} />)
  .add('TwoItems', () => 
    <>
    <ListItem item={shortItem} modal={modalTemp} />
    <ListItem item={longItem} modal={modalTemp} />
    </>
  ) 