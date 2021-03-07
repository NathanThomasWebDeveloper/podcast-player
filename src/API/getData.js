// @flow

export type PodcastData = {
    title: string,
    episodeTitle: string,
    description: string,
    image: string,
    audio: string
}

export const getData = (): PodcastData => ({
    title: "In Mythology and Legends",
    episodeTitle: "Icarus, the Boy Who Flew Too Close to The Sun",
    description: "You are imprisoned on the island of Crete but your father has a plan for your escape. You strap on your wings and jump.",
    image: "https://storage.googleapis.com/in_mythology/icarus.jpg",
    audio: "https://storage.googleapis.com/in_mythology/episodes/Icarus_128kbps.mp3"
    })