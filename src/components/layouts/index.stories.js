import React from 'react';
import { storiesOf } from '@storybook/react';
import DesktopLayout from './Desktop';
import MobileLayout from './Mobile';

import '../../index.css' // load base css to show accurate views

const player = {
  name: 'Jane Doe',
  HP: 15,
  maxHP: 195,
}

storiesOf('Layouts', module)
  .add('Desktop', () => <DesktopLayout player={player} /> )
  .add('Mobile', () => <MobileLayout player={player} /> )
   