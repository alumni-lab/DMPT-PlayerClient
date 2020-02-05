import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './index';

const testItem = {
  id: 2,
  title: 'Some Long Item',
  description: 'Lorem ipsum\n dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.'
}
const options = {
  edit: true,
  delete: true
}

storiesOf('Common/Modal', module)
  .add('Mobile', () => <Modal item={testItem} options={options} mobile={true} />)
  .add('Desktop', () => <Modal item={testItem} options={options} />)
  