export default ({ song, album, artist }) =>
	song ? (
		<div
			className="song-info"
			onClick={() =>
				window.location.replace(`/#/browse/albums/${album.id}`)
			}
		>
			<img src={album.img} />
			<div>
				<h4>{song.title}</h4>
				<h5>{artist.name}</h5>
			</div>
		</div>
	) : (
		<div />
	);
