// This would be a test
import getPlaylist from '../src/getPlaylist'

test ('returns "playlist"', () => {
  const result = getPlaylist()
  expect(result).toEqual('playlist')
})
