import React from 'react';
import { storiesOf } from '@storybook/react';
import DesktopLayout from './Desktop';
import MobileLayout from './Mobile';

import '../../index.css'

storiesOf('Layouts', module)
  .add('Desktop', () => <DesktopLayout /> )
  .add('Mobile', () => <MobileLayout /> )
   