import {getData} from './getData'

const urlRegEx = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm

test('image from getData is a URL', () => {
    const {image} = getData()
    expect(image).toMatch(urlRegEx)
})
test('audio from getData is a URL', () => {
    const {audio} = getData()
    expect(audio).toMatch(urlRegEx)
})