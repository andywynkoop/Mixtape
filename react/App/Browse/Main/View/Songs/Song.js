export default ({ song, select, pause, selected, i, playing }) => {
	const click = selected && playing ? pause : select(song.id);
	const icon =
		selected && playing ? (
			<i className="fas fa-pause" />
		) : (
			<i className="fas fa-play" />
		);
	const num =
		selected && playing ? <span></span> : <span>{`${i + 1}. `}</span>;

	return (
		<li className="song" onClick={click}>
			<div>
				<div className="song-icon-container">
					{icon}
					{num}
				</div>
				{song.title}
			</div>
			<i className="fas fa-ellipsis-h" />
		</li>
	);
};
