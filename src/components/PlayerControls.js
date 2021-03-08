// @flow
import * as React from 'react'
import styled from 'styled-components'
import type {AudioControls, AudioState} from "../Types";


type Props = {
    audioControls: AudioControls,
    audioState: AudioState
}
const Wrapper = styled.div`
  display: block
`

const PlayerControls = (props: Props) => {
    return (<Wrapper>
        CONTENT
    </Wrapper>)
}
export default PlayerControls