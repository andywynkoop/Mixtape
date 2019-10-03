const { Component } = React;

const setProgressByRotation = function(rotation) {
	const transform_styles = [
		'-webkit-transform',
		'-ms-transform',
		'transform',
	];

	const fills = document.getElementsByClassName('fill');
	const fullMask = document.getElementById('mask-full');
	for (let i in transform_styles) {
		Array.from(fills).forEach(
			fill => (fill.style[transform_styles[i]] = `rotate(${rotation}deg)`)
		);
		fullMask.style[transform_styles[i]] = `rotate(${rotation}deg)`;
	}
};

export default class Loading extends Component {
	componentDidUpdate() {
		const progress = this.props.progress || 0;
		const rotation = Math.floor((progress * 180) / 100);
		const elem = document.getElementsByClassName(
			'loading-progress-spinner'
		)[0];
		if (elem) setProgressByRotation(rotation);
	}

	render() {
		const progress = this.props.progress || 0;
		// const rotation = Math.floor((progress * 180) / 100);
		// const prevDom = document.getElementsByClassName(
		// 	'loading-progress-spinner'
		// )[0];
		// if (prevDom) setProgressByRotation(rotation);

		return (
			<div className="loading-progress-spinner">
				<div className="circle">
					<div className="mask" id="mask-full">
						<div className="fill"></div>
					</div>
					<div className="mask">
						<div className="fill"></div>
						<div class="fill"></div>
					</div>
					<div className="inset">
						<p>Loading {progress || 0}%</p>
					</div>
				</div>
			</div>
		);
	}
}

// Credit to https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9 for help making this!
