// @flow
import * as React from 'react'
import styled from 'styled-components'
import Loader from "../UI/Loader";
import {useState} from "react/cjs/react.production.min";
import PlayerControls from "./PlayerControls";
import Slider from "../UI/Slider";
import VolumeControl from "./VolumeControl";
import AudioInfo from "./AudioInfo";

type Props = {}


const Wrapper = styled.div`
  display: block
`

const AudioPlayerContainer = (props: Props) => {
    const [isReady, setIsReady] = useState(false)
    return (<Wrapper>
        {isReady ? <Loader/> :
            <React.Fragment>
                <AudioInfo />
                <PlayerControls/>
                <Slider/>
                <VolumeControl/>
            </React.Fragment>
        }
    </Wrapper>)
}
export default AudioPlayerContainer