import React from "react";
import styled from "styled-components";
import { fonts, colours } from "../../common/styles/index.js";
import Cookies from "js-cookie";

let colour = colours[Cookies.get("theme")] || colours.base;

const Info = styled.div`
  /* Positioning */

  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 0.5rem;
  border: 2px solid ${colour.primaryShadow};

  /* Color */
  background-color: ${colour.backgroundDark};

  /* Text */
  font-family: ${fonts.main.family};
`;

const PortraitRow = styled.div`
  /* Display & Box Model */
  display: flex;

  /* Text */
  font-size: ${fonts.main.size.large};
  font-weight: 500;
`;

const PortraitColumn = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Portrait = styled.img`
  /* Display & Box Model */
  border-radius: 50%;
  width: 15vw;
  min-width: 120px;
  height: 15vw;
  min-height: 120px;
`;

const LevelColumn = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-left: 0.7em;
`;

const AgeRow = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: flex-end;
  margin-top: -2em;
  margin-bottom: 1em;
`;

const AgeColumn = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /* Text */
  font-size: ${fonts.main.size.large};
`;

const AgeValueColumn = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* Text */
  font-size: ${fonts.main.size.large};
`;

const AbilityRow = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AbilityContainer = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 30%;
`;

const AbilityColumn = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15vw;
  min-width: 120px;
  height: 15vw;
  min-height: 120px;
  border: 1px solid black;
  border-radius: 50%;
  margin-bottom: 1em;
`;

const AbilityValue = styled.div`
  /* Text */
  font-size: ${fonts.main.size.large};
`;

const ResistanceRow = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-around;
`;
const ResistanceTitle = styled.div`
  /* Text */
  font-size: ${fonts.main.size.large};
`;

const ResistanceColumn = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* Text */
  font-size: ${fonts.main.size.medium};
`;

const DesktopPlayerInfo = ({ player }) => {
  const {
    AC,
    age,
    background,
    className,
    height,
    baseStats,
    level,
    proficiency,
    portrait,
    race,
    saveDC,
    specialField,
    speed,
    resistances,
    weaknesses,
    weight
  } = player;

  const initiative = Math.floor((baseStats.DEX - 10) / 2);
  const abilities = {
    Speed: speed,
    Initiative: initiative,
    Proficiency: proficiency,
    AC: AC,
    "Save DC": saveDC
  };

  const abilityBubbles = Object.entries(abilities).map(entry => (
    <AbilityContainer>
      <AbilityColumn>
        <div>{entry[0]}</div>
        <AbilityValue>{entry[1]}</AbilityValue>
      </AbilityColumn>
    </AbilityContainer>
  ));
  const specialBubble = specialField ? (
    <AbilityContainer>
      <AbilityColumn>
        <div>Special</div>
        <AbilityValue>{specialField.name}</AbilityValue>
        <AbilityValue>{specialField.value}</AbilityValue>
      </AbilityColumn>
    </AbilityContainer>
  ) : (
    <></>
  );
  const resistancesList =
    resistances &&
    resistances.map(resistance => (
      <div>
        <input type="checkbox" name={resistance} />
        {resistance}
      </div>
    ));
  const weaknessesList =
    weaknesses &&
    weaknesses.map(weakness => (
      <div>
        <input type="checkbox" name={weakness} />
        {weakness}
      </div>
    ));
  return (
    <Info>
      <PortraitRow>
        <PortraitColumn>
          <Portrait src={portrait} alt="portrait" />
          <div>{background}</div>
        </PortraitColumn>
        <LevelColumn>
          <div>Level {level}</div>
          <div>{race}</div>
          <div>{className}</div>
        </LevelColumn>
      </PortraitRow>
      <AgeRow>
        <AgeColumn>
          <div>Age:</div>
          <div>Height:</div>
          <div>Weight:</div>
        </AgeColumn>
        <AgeValueColumn>
          <div>{age}</div>
          <div>{height}</div>
          <div>{weight}</div>
        </AgeValueColumn>
      </AgeRow>
      <AbilityRow>
        {abilityBubbles}
        {specialBubble}
      </AbilityRow>
      <ResistanceRow>
        <ResistanceColumn>
          <ResistanceTitle>Resistances</ResistanceTitle>
          {resistancesList}
        </ResistanceColumn>
        <ResistanceColumn>
          <ResistanceTitle>Weaknesses</ResistanceTitle>
          {weaknessesList}
        </ResistanceColumn>
      </ResistanceRow>
    </Info>
  );
};

export default DesktopPlayerInfo;
