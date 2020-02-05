import React from 'react';
import styled from 'styled-components';

const ExampleSection = styled.p`
  background-color: #aaaaaa;
  padding: 5px;
  height: 10vh;
  width: 50%;
`

const Section = ({ content }) => {
  // component code here
  return (
    <ExampleSection>
      {content}
    </ExampleSection>
  )
}

export default Section;
