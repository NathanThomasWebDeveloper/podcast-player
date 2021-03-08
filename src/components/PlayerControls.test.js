import {render, screen} from '@testing-library/react';
import PlayerControls from './PlayerControls';
import userEvent from "@testing-library/user-event";

test('Renders PlayerControls', () => {
    render(<PlayerControls/>);
});

describe('Render buttons', () => {
    const test_audioControls = {
        play: jest.fn(),
        pause: jest.fn(),
        rewind: jest.fn(),
        forward: jest.fn()
    }

    test('play is clickable if paused', () => {
        render(<PlayerControls audioControls={test_audioControls} audioState={"PAUSED"}/>)
        userEvent.click(screen.getByRole('button', {name: /play/i}))
        expect(test_audioControls.play).toHaveBeenCalled(1)
    })
    test('pause is clickable if playing', () => {
        render(<PlayerControls audioControls={test_audioControls} audioState={"PLAYING"}/>)
        userEvent.click(screen.getByRole('button', {name: /pause/i}))
        expect(test_audioControls.pause).toHaveBeenCalled(1)
    })
    test('rewind is clickable', () => {
        render(<PlayerControls audioControls={test_audioControls} audioState={"PLAYING"}/>)
        userEvent.click(screen.getByRole('button', {name: /rewind/i}))
        expect(test_audioControls.rewind).toHaveBeenCalled(1)
    })
    test('forward is clickable', () => {
        render(<PlayerControls audioControls={test_audioControls} audioState={"PLAYING"}/>)
        userEvent.click(screen.getByRole('button', {name: /forward/i}))
        expect(test_audioControls.forward).toHaveBeenCalled(1)
    })
})