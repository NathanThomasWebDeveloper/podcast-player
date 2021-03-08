import {render, screen} from '@testing-library/react';
import AudioPlayerContainer from './AudioPlayerContainer';
import {EXAMPLE_PodCastData} from "../Types";

test('Renders AudioPlayerContainer', () => {
    render(<AudioPlayerContainer/>);
});

describe('Has correct children', () => {
    render(<AudioPlayerContainer {...EXAMPLE_PodCastData} />);
    test('renders PlayerControls', async () => {
        await screen.findByTestId('PlayerControls')
    });
    test('renders VolumeControl', async () => {
        await screen.findByTestId('VolumeControl')
    });
    test('renders Slider', async () => {
        await screen.findByTestId('Slider')
    });
})