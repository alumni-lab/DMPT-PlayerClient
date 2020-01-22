# Dungeon Master Player Tracker - Player Client

## Overview

The idea is to create a client for Players in games where the DM uses the DMPT to have access to their player sheet rather than having their character sheet on paper.
DMPT link: [DMPT](https://draconianlore.github.io/dmPlayerTracker)

Players will be able to:

* View their stats as they are in the DMPT and edit their stats(when approved by the DM)
* Add notes, items, spells(when available)
* Send a private message to the DM to ask questions or respond to DM messages(for example when the DM sends a message from their patron) - Websockets Chat
* Track HP, Spell slots, inspiration die, and other frequently changing stats

The client will talk to the backend using websockets so both the player and DM apps are up to date, chat is live, etc.

### To look at:

* some flashy graphics effects for when player takes damage, heals, levels up
* drag/drop sorting - viability for mobile?
* decide on CSS style
  * sass/scss
  * styled components
  * standard css
  * something else?

## Coding style guide

* Using functional components with hooks only (no class components if possible)
* Fonts and colours to be set up in stylesheets for global colours and styles
* Folder structure: each component in its own folder with subcomponent folders inside(see exampleComponent) or common components used from a common folder


## Breakdown

### React app setup

* Setup react app
* Setup websockets 
* Setup React Router(for mobile view)

### Storybook setup

* set up storybook for components

### User Login/Signup

* Setup for existing users to log in, and new users to sign up (with player code from DM)

### GUI setup

* Create GUI for both: 
  * mobile to show one section at a time(using react router?)
  * desktop to show all(or as many as fit on a screen)
* Setup Menu/Navigation including logout, profile etc.
* Setup css or sass for stylesheets and create global styles, fonts and colours

### Connect to API and pull and display data for each section

All data can be pulled on initial connect, then when websockets alert to new data, new data will be pulled from that endpoint


### Components to be created

Some stats affect other stats(for example Passive Perception), so all changes to stats must change the global state

* Base Stats
* Player Info
* Abilities
* Spells
* Notes
* Items
* Frequently changing stats
  * Hit Points
  * Spell Slots
  * Custom Fields(DM Created such as Inspiration Dice)
* Possibly look into
  * Equipment?
  * Prepared Spells

