const { connect } = ReactRedux;
import { deletePlaylist } from '../../../../../actions';

const PlaylistOptionsModal = ({ isOpen, remove }) => (
	<div className={`item-options ${isOpen ? '' : 'hidden'}`}>
		<p onClick={remove}>Remove...</p>
	</div>
);

const mdp = (dispatch, { id }) => ({
	remove: () => dispatch(deletePlaylist(id)),
});

export default connect(
	null,
	mdp
)(PlaylistOptionsModal);
