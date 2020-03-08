import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fonts, colours } from '../../common/styles';
import Cookies from 'js-cookie';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import postMove from './helpers/moving';

// import moving from './hooks/moving';
import TitleBar from './TitleBar';
let colour = colours[Cookies.get('theme')] || colours.base;
const Desktop = styled.div`
background-color: ${colour.background};
`
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 95vh;
  overflow-x: scroll;
  align-items: center;

  // Show scrollbar if screen is too small
  @media screen and (max-width: 1210px) {
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: ${colour.primaryShadow};
    }
    ::-webkit-scrollbar {
      height: 12px;
    }
    ::-webkit-scrollbar-thumb{
    	border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: ${colour.primary};
    }
    // firefox fix
    scrollbar-color: ${colour.primary} ${colour.primaryShadow};
  };
`
const TopBar = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colour.backgroundDark};
  color: ${colour.primary};
  margin: 0;
  border-radius: 0 0 2vh 2vh;
`
const TopBarButton = styled.button`
  height: 3.5vh;
  border-radius: 1vh;
  background-color: ${colour.backgroundDark};
  color: ${colour.primary};
  margin: 0 1vh;
  font-size: ${fonts.main.size.small};
  border-color: ${colour.quaternary};
  border-style: ridge;
  padding: auto;
`
const PlayerName = styled.span`

`
const Column = styled.div`
  width: 19.6%;
  height: 99%;
  min-width: 220px;
  border: 1px solid black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: auto;
`
const Section = styled.div`
  overflow: scroll;
  scrollbar-width: none;
  min-height: 33px;
`
const SectionContent = styled.div`
  padding: 5px 10px;
  transition: all 1s ease;
  max-height: ${({ minimized }) => minimized ? '0' : '2000px'};
  color: ${colour.secondary};
`

// data for testing - to be replaced with section views at a later time
const testdata = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare vitae augue nec facilisis. Suspendisse rutrum enim ut magna mattis, at fermentum metus luctus. Nam consequat ultrices faucibus. In facilisis pretium massa ac faucibus. Integer augue est, vestibulum id pellentesque nec, finibus ac urna. Maecenas nec posuere sem. Ut et vulputate lectus. Aliquam egestas nisi sed mauris suscipit, vitae feugiat ante lacinia. Nunc sed metus at eros varius fringilla vel et turpis. Praesent nec neque ligula. Ut imperdiet, turpis ac ornare venenatis, turpis ligula aliquet lorem, vel congue mi risus in sapien. Nulla facilisi.Vestibulum rhoncus, neque a molestie consectetur, libero quam aliquet nulla, ac blandit magna tortor sed enim. Nullam suscipit quam velit, et ornare ligula dictum sit amet. Fusce et lacus purus. Vestibulum placerat auctor erat, id iaculis massa scelerisque non. Proin fermentum interdum lacus non ultrices. Maecenas ac tellus enim. Curabitur rutrum placerat ligula at congue. Donec venenatis sagittis lectus, laoreet dapibus ante lobortis vel. Sed sem sem, fermentum volutpat hendrerit ut, interdum in quam.Morbi non odio ultrices ipsum facilisis luctus. Nulla sit amet auctor tellus, et mollis nulla. Morbi mattis, turpis ac tempor dictum, quam massa finibus est, a fermentum turpis risus eget turpis. Ut fringilla nunc et aliquet rutrum. Nam lacinia nibh et ex pulvinar imperdiet. Suspendisse tincidunt egestas diam, ac pellentesque diam. Donec ut aliquam enim, efficitur lacinia magna. In eget eleifend erat. Etiam suscipit dolor convallis, fringilla ante at, feugiat sapien. Nunc nec feugiat lorem. Sed sit amet nibh id turpis placerat mattis ut sed libero. Nulla id ornare libero. Nunc feugiat feugiat ultricies. Cras mattis ante et dolor hendrerit, sit amet ornare massa vulputate. Vestibulum laoreet dolor et sapien porttitor, nec sodales augue aliquam. Donec gravida mollis velit, sit amet mattis nisi sollicitudin nec.Quisque ac magna nisl. Etiam efficitur sed magna vitae ornare. Vivamus in sodales velit. Vestibulum id porta odio, eu tincidunt tellus. Aenean mauris odio, commodo in sapien eget, pellentesque semper tellus. Morbi rhoncus ullamcorper urna, at pretium dui vehicula vitae. Sed sed dolor efficitur, commodo lectus imperdiet, tempor nibh.Donec sagittis pharetra orci sit amet vehicula. Mauris luctus, enim id fringilla laoreet, tortor tortor condimentum dolor, in mattis purus urna et ipsum. Duis ut risus quis tellus consectetur maximus. Sed nulla urna, sagittis nec viverra ut, dignissim a tellus. Nullam vel dui auctor, eleifend tortor et, semper est. Morbi ultrices non purus non aliquam. Praesent malesuada sem eget ante placerat, nec congue sapien dignissim. In non neque eu justo vulputate feugiat.`

const DesktopLayout = ({ player }) => {
  player = player || {};
  const [sections, setSections] = useState([
    { id: 1, name: 'Base Stats', min: false, content: testdata },
    { id: 2, name: 'Abilities', min: false, content: testdata },
    { id: 3, name: 'Items', min: false, content: testdata },
    { id: 4, name: 'Player Info', min: false, content: testdata },
    { id: 5, name: 'Spells', min: false, content: testdata },
    { id: 6, name: 'Spell Slots', min: false, content: testdata },
    { id: 7, name: 'Notes', min: false, content: testdata }
  ]);

  let columns = player.boardOrder || {
    col1: [1, 0],
    col2: [2, 0],
    col3: [4, 0],
    col4: [5, 6],
    col5: [7, 3],
  };
  const [desktopView, setDesktopView] = useState(false)

  const minimize = (section) => {
    let changeSections = sections;
    changeSections[section - 1].min = !changeSections[section - 1].min;
    setSections(changeSections)
    rebuildView();
  }


  // Reorders items in a column
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // Moves a section from one column to another
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    if (destClone.includes(0)) {
      if (destClone[0] === 0) {
        destClone.splice(0, 1);
      } else if (destClone[1] === 0) {
        destClone.splice(1, 1);
      } else if (destClone[2] === 0) {
        destClone.splice(2, 1);
      }
    }
    sourceClone.push(0);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  };

  // extra styling for columns when dragging sections over them
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? colour.background : colour.backgroundDark,
  });

  // extra styling for sections being dragged
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    background: isDragging ? colour.background : colour.backgroundDark,
    ...draggableStyle
  });

  const getList = id => columns[id];

  const onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the lists
    if (!destination) {
      return;
    }
    // moved in the same column
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      columns[destination.droppableId] = items;
      // moved to a diferent column
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      let results = {
        col1: result.col1 || columns.col1,
        col2: result.col2 || columns.col2,
        col3: result.col3 || columns.col3,
        col4: result.col4 || columns.col4,
        col5: result.col5 || columns.col5
      };
      columns = postMove(results);
    }
    // re-render the page after changes have cascaded
    rebuildView();
  };

  const generateSection = (section, position) => {
    if (section > 0) {
      const currentSection = sections[section - 1];
      return (
        <Draggable
          key={currentSection.id}
          draggableId={currentSection.name}
          index={position}>
          {(provided, snapshot) => (
            <Section
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}>
              <TitleBar title={currentSection.name} minimizeSection={minimize} sectionID={currentSection.id} />
              <SectionContent minimized={currentSection.min}>
                {currentSection.content}
              </SectionContent>
            </Section>
          )}
        </Draggable>
      )
    }
  }

  const generateColumn = (column) => {
    const current = columns[column]
    return (
      <Droppable droppableId={column} >
        {(provided, snapshot) => (
          < Column key={column} ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {generateSection(current[0], 0)}
            {generateSection(current[1], 1)}
            {provided.placeholder}
          </ Column>
        )}
      </Droppable>
    )
  };

  const rebuildView = () => {
    setDesktopView(
    <DragDropContext onDragEnd={onDragEnd}>
      {generateColumn('col1')}
      {generateColumn('col2')}
      {generateColumn('col3')}
      {generateColumn('col4')}
      {generateColumn('col5')}
    </DragDropContext>
    )}

  useEffect(() => {
    rebuildView()
  }, [])
  
  return (
    <Desktop>
      <TopBar>
        <TopBarButton>
          Themes
        </TopBarButton>
        <PlayerName>
          {player.name}
        </PlayerName>
        <TopBarButton>
          Log Out
        </TopBarButton>
      </TopBar>
      <Container>
        {desktopView}
      </Container>
    </Desktop>
  )
}

export default DesktopLayout;