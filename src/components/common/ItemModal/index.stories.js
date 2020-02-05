import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from './index';

const shortItem = {
  id: 1,
  title: 'Some Item',
  description: 'This is a short description'
}
const longItem = {
  id: 2,
  title: 'Some Long Item',
  description: 'Lorem ipsum\n dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.'
}

storiesOf('Common/Modal', module)
  .add('ShortDescription', () => <ListItem itemID={shortItem.id} title={shortItem.title} description={shortItem.description} />)
  .add('LongDescription', () => <ListItem itemID={longItem.id} title={longItem.title} description={longItem.description} />)
  .add('TwoItems', () => 
    <>
    <ListItem itemID={shortItem.id} title={shortItem.title} description={shortItem.description} />
    <ListItem itemID={longItem.id} title={longItem.title} description={longItem.description} />
    </>
  )