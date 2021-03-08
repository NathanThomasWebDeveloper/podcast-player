import {render, screen} from '@testing-library/react';
import AudioInfo from './AudioInfo';
import {EXAMPLE_PodcastInfo} from "../Types";

test('Renders AudioInfo', () => {
    render(<AudioInfo/>);
});
test('renders image if in props', () => {
    render(<AudioInfo {...EXAMPLE_PodcastInfo}/>)
    screen.getByRole('image')
})
test('render description if in props', () => {
    render(<AudioInfo {...EXAMPLE_PodcastInfo}/>)
    screen.getByText(EXAMPLE_PodcastInfo.description, {exact: false})
})
test('render title', () => {
    render(<AudioInfo {...EXAMPLE_PodcastInfo}/>)
    screen.getByText(EXAMPLE_PodcastInfo.title, {exact: false})
})

test('render episode title', () => {
    render(<AudioInfo {...EXAMPLE_PodcastInfo}/>)
    screen.getByText(EXAMPLE_PodcastInfo.episodeTitle, {exact: false})
})