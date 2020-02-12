import React, { useState } from 'react';
import styled from 'styled-components';
import { fonts, colours } from '../../common/styles';

const colour = colours.base;
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
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
  }
`

const Column = styled.div`
  width: 19.6%;
  height: 98%;
  min-width: 220px;
  border: 1px solid black;
  overflow: hidden;
  padding: 5px 10px;
`
const Section = styled.div`
  height: ${({space}) => space ? '50%' : '100%'};
  overflow: scroll;
  scrollbar-width: none;
`
const testdata = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare vitae augue nec facilisis. Suspendisse rutrum enim ut magna mattis, at fermentum metus luctus. Nam consequat ultrices faucibus. In facilisis pretium massa ac faucibus. Integer augue est, vestibulum id pellentesque nec, finibus ac urna. Maecenas nec posuere sem. Ut et vulputate lectus. Aliquam egestas nisi sed mauris suscipit, vitae feugiat ante lacinia. Nunc sed metus at eros varius fringilla vel et turpis. Praesent nec neque ligula. Ut imperdiet, turpis ac ornare venenatis, turpis ligula aliquet lorem, vel congue mi risus in sapien. Nulla facilisi.Vestibulum rhoncus, neque a molestie consectetur, libero quam aliquet nulla, ac blandit magna tortor sed enim. Nullam suscipit quam velit, et ornare ligula dictum sit amet. Fusce et lacus purus. Vestibulum placerat auctor erat, id iaculis massa scelerisque non. Proin fermentum interdum lacus non ultrices. Maecenas ac tellus enim. Curabitur rutrum placerat ligula at congue. Donec venenatis sagittis lectus, laoreet dapibus ante lobortis vel. Sed sem sem, fermentum volutpat hendrerit ut, interdum in quam.Morbi non odio ultrices ipsum facilisis luctus. Nulla sit amet auctor tellus, et mollis nulla. Morbi mattis, turpis ac tempor dictum, quam massa finibus est, a fermentum turpis risus eget turpis. Ut fringilla nunc et aliquet rutrum. Nam lacinia nibh et ex pulvinar imperdiet. Suspendisse tincidunt egestas diam, ac pellentesque diam. Donec ut aliquam enim, efficitur lacinia magna. In eget eleifend erat. Etiam suscipit dolor convallis, fringilla ante at, feugiat sapien. Nunc nec feugiat lorem. Sed sit amet nibh id turpis placerat mattis ut sed libero. Nulla id ornare libero. Nunc feugiat feugiat ultricies. Cras mattis ante et dolor hendrerit, sit amet ornare massa vulputate. Vestibulum laoreet dolor et sapien porttitor, nec sodales augue aliquam. Donec gravida mollis velit, sit amet mattis nisi sollicitudin nec.Quisque ac magna nisl. Etiam efficitur sed magna vitae ornare. Vivamus in sodales velit. Vestibulum id porta odio, eu tincidunt tellus. Aenean mauris odio, commodo in sapien eget, pellentesque semper tellus. Morbi rhoncus ullamcorper urna, at pretium dui vehicula vitae. Sed sed dolor efficitur, commodo lectus imperdiet, tempor nibh.Donec sagittis pharetra orci sit amet vehicula. Mauris luctus, enim id fringilla laoreet, tortor tortor condimentum dolor, in mattis purus urna et ipsum. Duis ut risus quis tellus consectetur maximus. Sed nulla urna, sagittis nec viverra ut, dignissim a tellus. Nullam vel dui auctor, eleifend tortor et, semper est. Morbi ultrices non purus non aliquam. Praesent malesuada sem eget ante placerat, nec congue sapien dignissim. In non neque eu justo vulputate feugiat.`

const DesktopLayout = () => {
  const [order, serOrder] = useState({
    1: { a: true, b: true },
    2: { a: null, b: true },
    3: { a: true, b: null },
    4: { a: null, b: null },
    5: { a: null, b: null }
  })

  return (
    <Container>
      <Column column={1}>
        {order[1].a && <Section space={order[1].b}>
          {testdata}
        </Section>}
        {order[1].b && <Section space={order[1].a}>
          {testdata}
          </Section>}
      </Column>
      <Column column={2}>
        {order[2].a && <Section space={order[2].b}>
          {testdata}
        </Section>}
        {order[2].b && <Section space={order[2].a}>
          {testdata}
          </Section>}
      </Column>
      <Column column={3}>
        {order[3].a && <Section space={order[3].b}>
          {testdata}
        </Section>}
        {order[3].b && <Section space={order[3].a}>
          {testdata}
          </Section>}
      </Column>
      <Column column={4}>
        {order[4].a && <Section space={order[4].b}>
          {testdata}
        </Section>}
        {order[4].b && <Section space={order[4].a}>
          {testdata}
          </Section>}
      </Column>
      <Column column={5}>
        {order[5].a && <Section space={order[5].b}>
          {testdata}
        </Section>}
        {order[5].b && <Section space={order[5].a}>
          {testdata}
          </Section>}
      </Column>
    </Container>
  )
}

export default DesktopLayout;