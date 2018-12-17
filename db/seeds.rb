require('open-uri')

Artist.destroy_all
Album.destroy_all
Song.destroy_all
User.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

demo = User.create(email: "Andy5@email.com", password: "password")

jm = Artist.create(name: 'John Mayer')
dc = Artist.create(name: 'Dead & Company')
ts = Artist.create(name: 'Taylor Swift')

live_in_la = Album.create(title: 'Where the Light Is (Live in LA)', year: 2005, artist: jm)
live_dc = Album.create(title: 'Live in DC', year: 2018, artist: dc)
ts_album = Album.create(title: 'Taylor Swift', year: 2006, artist: ts)

althea = Song.create(title: 'Althea', album: live_dc, audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/althea-john-mayer-dc-insane-solo-2018.mp3'), filename: 'althea.mp3' })
free_fallin = Song.create(title: 'Free Fallin', album: live_in_la, audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-free-fallin-live-at-the-nokia-theatre.mp3'), filename: "free_fallin.mp3" })
our_song = Song.create(title: 'Our Song', album: ts_album, audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/taylor-swift-our-song.mp3'), filename: "our_song.mp3" })
teardrops = Song.create(title: 'Teardrops on my Guitar', album: ts_album, audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/taylor-swift-teardrops-on-my-guitar.mp3'), filename: "teardrops.mp3" })
tim_mcgraw = Song.create(title: 'Tim Mcgraw', album: ts_album, audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/taylor-swift-tim-mcgraw.mp3'), filename: "tim_mcraw.mp3" })
