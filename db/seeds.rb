require('open-uri')

Artist.destroy_all
Album.destroy_all
Song.destroy_all
User.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

demo = User.create(
  email: "Andy5@email.com", 
  password: "password"
)

jm = Artist.create(
  name: 'John Mayer',
  img: {io: open('https://pbs.twimg.com/profile_images/378800000605193575/1fc32f0a5988cea67befcae66dcc22b5.jpeg'), filename: "jm1.jpeg" }
)
dc = Artist.create(
  name: 'Dead & Company',
  img: {io: open('https://assets1.setlisting.com/artists/5789f1ff349f741c2b7a9922/dead-and-company-7f9fa8d934.png'), filename: "dc1.png" }
)
ts = Artist.create(
  name: 'Taylor Swift',
  img: {io: open('https://pbs.twimg.com/profile_images/600635415406718976/qIPIPX7F.jpg'), filename: "ts1.jpg" }
)
me = Artist.create(
  name: 'Missy Elliot',
  img: {io: open('https://c-sf.smule.com/sf/s24/arr/af/f5/ca56ac6f-f3cc-422f-b84c-e57fd8879662.jpg'), filename: "missy1.jpg" }
)

live_in_la = Album.create(
  title: 'Where the Light Is (Live in LA)', 
  year: 2005, 
  artist: jm,
  img: { io: open('https://m.media-amazon.com/images/I/6151WVdwHIL._AA256_.jpg'), filename: 'jm.jpg' }
)
live_dc = Album.create(
  title: 'Live in DC', 
  year: 2018, 
  artist: dc,
  img: { io: open('https://assets1.setlisting.com/artists/5789f1ff349f741c2b7a9922/dead-and-company-7f9fa8d934.png'), filename: 'dc.png' }
)
ts_album = Album.create(
  title: 'Taylor Swift', 
  year: 2006, 
  artist: ts,
  img: { io: open('https://m.media-amazon.com/images/I/61qKbVknIYL._AA256_.jpg'), filename: 'taylor.jpg' }
)
under = Album.create(
  title: 'Under Construction', 
  year: 2002, 
  artist: me,
  img: { io: open('https://m.media-amazon.com/images/I/61Fv+zCyFHL._AA256_.jpg'), filename: 'missy.jpg' }
)

althea = Song.create(
  title: 'Althea', 
  album: live_dc, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/althea-john-mayer-dc-insane-solo-2018.mp3'), filename: 'althea.mp3' }
)
free_fallin = Song.create(
  title: 'Free Fallin', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-free-fallin-live-at-the-nokia-theatre.mp3'), filename: "free_fallin.mp3" }
)
our_song = Song.create(
  title: 'Our Song', 
  album: ts_album, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/taylor-swift-our-song.mp3'), filename: "our_song.mp3" }
)
teardrops = Song.create(
  title: 'Teardrops on my Guitar', 
  album: ts_album, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/taylor-swift-teardrops-on-my-guitar.mp3'), filename: "teardrops.mp3" }
)
tim_mcgraw = Song.create(
  title: 'Tim Mcgraw', 
  album: ts_album, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/taylor-swift-tim-mcgraw.mp3'), filename: "tim_mcraw.mp3" }
)
work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)
# ##########################################

belief = Song.create(
  title: 'Belief', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/belief-john-mayer-dvd-ao-vivo-hd.mp3'), filename: "0.mp3"}
)

bold_as_love = Song.create(
  title: 'Bold As Love', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-bold-as-love-hd.mp3'), filename: "1.mp3"}
)

every_day_blues = Song.create(
  title: 'Every Day I Have the Blues', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-everyday-i-have-the-blues-live-in-la-high-def.mp3'), filename: "2.mp3"}
)

good_love = Song.create(
  title: 'Good Love is on the Way', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-good-love-is-on-the-way-hd.mp3'), filename: "3.mp3"}
)

grav = Song.create(
  title: 'Gravity', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-gravity-hd.mp3'), filename: "4.mp3"}
)

no_doctor = Song.create(
  title: "I Don't Need No Doctor" , 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-i-dont-need-no-doctor-live-in-la-high-def.mp3'), filename: "5.mp3"}
)

dont_trust = Song.create(
  title: "I Don't Trust Myself", 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-i-dont-trust-myself-whit-loving-you-live.mp3'), filename: "6.mp3"}
)

find_another_you = Song.create(
  title: "I'm Gonna Find Another You", 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-im-gonna-find-another-you.mp3'), filename: "7.mp3"}
)

atmosphere = Song.create(
  title: 'In Your Atmosphere', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-in-your-atmosphere-hd.mp3'), filename: "8.mp3"}
)

neon = Song.create(
  title: 'Neon', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-neon-live-in-la-1080p.mp3'), filename: "9.mp3"}
)

stop_train = Song.create(
  title: 'Stop this Train', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-stop-this-train-hd.mp3'), filename: "10.mp3"}
)

vultures = Song.create(
  title: 'Vultures', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-vultures-hd.mp3'), filename: "11.mp3"}
)

wait_until_tom = Song.create(
  title: 'Wait Until Tomorrow', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/john-mayer-wait-until-tomorrow-hd.mp3'), filename: "12.mp3"}
)

slow_dancing = Song.create(
  title: 'Slow Dancing in a Burning Room', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/slow-dancing-in-a-burning-room-live-in-la.mp3'), filename: "13.mp3"}
)

heart_of_life = Song.create(
  title: 'The Heart of Life', 
  album: live_in_la, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/the-heart-of-life-live-in-la.mp3'), filename: "14.mp3"}
)


# ######## MISSY AND TAYLOR
work_it = Song.create(
  title: 'Work It', 
  album: live_in_la, 
  audio: { io: open(''), filename: "15.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: live_in_la, 
  audio: { io: open(''), filename: "16.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: "17.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open(''), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: ".mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)

work_it = Song.create(
  title: 'Work It', 
  album: under, 
  audio: { io: open('https://s3-us-west-1.amazonaws.com/react-spotify-aa/missy-elliott-work-it-official-video.mp3'), filename: "missy_e_work_it.mp3"}
)