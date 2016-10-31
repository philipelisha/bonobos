import { connect } from 'react-redux';
import { toggleZoom, moveMouse, updateDrag } from '../actions';
import { PhotoWrapper } from '../components/PhotoWrapper';

const mapStateToProps = (state) => {
	return {
		zoomed: state.zoom.zoomed,
		mousePosition: state.mousePosition,
		dragPosition: state.zoom.dragPosition,
		screenWidth: state.screenSize.screenWidth,
		screenHeight: state.screenSize.screenHeight
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		moveMouse: (pos) => {
			dispatch(moveMouse(pos))
		},
		toggleZoom: () => {
			dispatch(toggleZoom())
		},
		updateDrag: (pos) => {
			dispatch(updateDrag(pos))
		},
	}
}

export const PhotoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoWrapper)