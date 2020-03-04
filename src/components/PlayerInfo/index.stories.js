import React from 'react';
import { storiesOf } from '@storybook/react';
import DesktopPlayerInfo from './Desktop';
import MobilePlayerInfo from './Mobile';

const player = {
  AC: 15,
  age: 130,
  background: 'Hermit',
  charName: 'Sir Knight',
  className: 'Paladin',
  height: "5'11",
  hitDie: 'd8',
  baseStats: {DEX: 15},
  level: 6,
  proficiency: 3,
  portrait: 'https://i.imgur.com/8zJkcyL.png',
  race: 'Dwarf',
  saveDC: 13,
  specialField: {name: 'light points', value: 3},
  speed: 25,
  weaknesses: ['necrotic', 'poison'],
  weight: '160lb'
  }

storiesOf('PlayerInfo', module)
  .add('Mobile', () => <MobilePlayerInfo player={player} />)
  .add('Desktop', () => <DesktopPlayerInfo player={player}/>)
