import React from "react";
import { storiesOf } from "@storybook/react";
import ItemList from "./index";

const items = [
  {
    id: 256,
    name: "Darkvision",
    description:
      "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
  },
  {
    id: 257,
    name: "Dwarven Resilience",
    description:
      "You have advantage on saving throws against poison, and you have resistance against poison damage."
  },
  {
    id: 258,
    name: "Stonecunning",
    description:
      "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
  },
  {
    id: 259,
    name: "Fighting Style",
    description:
      "You adopt a particular style of fighting as your specialty. You can’t take a Fighting Style option more than once, even if you later get to choose again."
  },
  {
    id: 260,
    name: "Second Wind",
    description:
      "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
  },
  {
    id: 470,
    name: "Action Surge",
    description:
      "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
  },
  {
    id: 471,
    name: "Martial Archetype",
    description:
      "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
  }
];

storiesOf("Common/ItemList", module).add("ItemList", () => (
  <ItemList items={items} />
));
