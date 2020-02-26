import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fonts, colours } from '../../common/styles';
import Cookies from 'js-cookie';

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
`



const testdata = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare vitae augue nec facilisis. Suspendisse rutrum enim ut magna mattis, at fermentum metus luctus. Nam consequat ultrices faucibus. In facilisis pretium massa ac faucibus. Integer augue est, vestibulum id pellentesque nec, finibus ac urna. Maecenas nec posuere sem. Ut et vulputate lectus. Aliquam egestas nisi sed mauris suscipit, vitae feugiat ante lacinia. Nunc sed metus at eros varius fringilla vel et turpis. Praesent nec neque ligula. Ut imperdiet, turpis ac ornare venenatis, turpis ligula aliquet lorem, vel congue mi risus in sapien. Nulla facilisi.Vestibulum rhoncus, neque a molestie consectetur, libero quam aliquet nulla, ac blandit magna tortor sed enim. Nullam suscipit quam velit, et ornare ligula dictum sit amet. Fusce et lacus purus. Vestibulum placerat auctor erat, id iaculis massa scelerisque non. Proin fermentum interdum lacus non ultrices. Maecenas ac tellus enim. Curabitur rutrum placerat ligula at congue. Donec venenatis sagittis lectus, laoreet dapibus ante lobortis vel. Sed sem sem, fermentum volutpat hendrerit ut, interdum in quam.Morbi non odio ultrices ipsum facilisis luctus. Nulla sit amet auctor tellus, et mollis nulla. Morbi mattis, turpis ac tempor dictum, quam massa finibus est, a fermentum turpis risus eget turpis. Ut fringilla nunc et aliquet rutrum. Nam lacinia nibh et ex pulvinar imperdiet. Suspendisse tincidunt egestas diam, ac pellentesque diam. Donec ut aliquam enim, efficitur lacinia magna. In eget eleifend erat. Etiam suscipit dolor convallis, fringilla ante at, feugiat sapien. Nunc nec feugiat lorem. Sed sit amet nibh id turpis placerat mattis ut sed libero. Nulla id ornare libero. Nunc feugiat feugiat ultricies. Cras mattis ante et dolor hendrerit, sit amet ornare massa vulputate. Vestibulum laoreet dolor et sapien porttitor, nec sodales augue aliquam. Donec gravida mollis velit, sit amet mattis nisi sollicitudin nec.Quisque ac magna nisl. Etiam efficitur sed magna vitae ornare. Vivamus in sodales velit. Vestibulum id porta odio, eu tincidunt tellus. Aenean mauris odio, commodo in sapien eget, pellentesque semper tellus. Morbi rhoncus ullamcorper urna, at pretium dui vehicula vitae. Sed sed dolor efficitur, commodo lectus imperdiet, tempor nibh.Donec sagittis pharetra orci sit amet vehicula. Mauris luctus, enim id fringilla laoreet, tortor tortor condimentum dolor, in mattis purus urna et ipsum. Duis ut risus quis tellus consectetur maximus. Sed nulla urna, sagittis nec viverra ut, dignissim a tellus. Nullam vel dui auctor, eleifend tortor et, semper est. Morbi ultrices non purus non aliquam. Praesent malesuada sem eget ante placerat, nec congue sapien dignissim. In non neque eu justo vulputate feugiat.`

const DesktopLayout = ({ player }) => {
  const [order, setOrder] = useState([
    { a: { content: true, min: false }, b: { content: true, min: false } },
    { a: { content: true, min: false }, b: { content: true, min: false } },
    { a: { content: true, min: false }, b: { content: true, min: false } },
    { a: { content: true, min: false }, b: { content: true, min: false } },
    { a: { content: true, min: false }, b: { content: true, min: false } }
  ]);
  const [columns, setColumns] = useState([]);

  const moveItem = (target) => {
    // TODO make sections draggable
    console.log(target)
    // const newPosition = event;
    // moving(newPosition, order, setOrder)
  }
  const minimize = (column, section) => {
    console.log('Minimize', column, section)
    let newOrder = order;
    newOrder[column][section].min = !newOrder[column][section].min;
    setOrder(newOrder)
    updateOrder()
    updateColumns()
  }

  const updateOrder = () => {
    const temp = order;
    for (let i = 0; i < 5; i++) {
      temp[i].a.content = (<>
        {order[i].a.content && <Section >
          <TitleBar title={`Section ${i}A`} position={`${i}a`} minimizeSection={minimize} />
          <SectionContent minimized={order[i].a.min}>
            {testdata}
          </SectionContent>
        </Section>}
      </>)
      temp[i].b.content = (
        <>
          {order[i].b.content && <Section >
            <TitleBar title={`Section ${i}B`}  position={`${i}b`} minimizeSection={minimize} />
            <SectionContent minimized={order[i].b.min}>
              {testdata}
            </SectionContent>
          </Section>}
        </>
      )
    }
    setOrder(temp)
  }
  useEffect(() => {
    updateOrder()
    updateColumns()
  }, [])

  const updateColumns = () => {
    const loadedData = order.map((section, index) => {
      return (
        < Column key={index} >
          {section.a.content}
          {section.b.content}
        </Column >)
    })
    setColumns(loadedData)
  }

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
      {columns}
    </Container>
    </Desktop>
  )
}

export default DesktopLayout;