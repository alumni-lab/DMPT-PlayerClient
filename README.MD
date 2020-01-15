# Dungeon Master Player Tracker - Player Client

## Overview

The idea is to create a client for Players in games where the DM uses the DMPT to have access to their player sheet rather than having their character sheet on paper.

Players will be able to:

* View their stats as they are in the DMPT and edit their stats(when approved by the DM)
* Add notes, items, spells(when available)
* Send a private message to the DM to ask questions or respond to DM messages(for example when the DM sends a message from their patron)
* Track HP, Spell slots, inspiration die, and other frequently changing stats

The client will talk to the backend using websockets so both the player and DM apps are up to date, chat is live, etc.


### To look at:

* use trello API to show/sort items for player ionventory?
* some flashy graphics effects for when player takes damage, heals, levels up