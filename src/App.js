// @flow
import * as React from 'react'
import styled from 'styled-components'
import AudioPlayerContainer from "./components/AudioPlayerContainer";

type Props = {}

const Wrapper = styled.div`
  display: block
`

function App(props: Props) {
    return (
        <Wrapper>
            <AudioPlayerContainer/>
        </Wrapper>
    );
}

export default App;
