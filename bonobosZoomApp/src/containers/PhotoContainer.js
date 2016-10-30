import { connect } from 'react-redux';
import { toggleZoom, toggleDrag, moveMouse, updateDrag } from '../actions';
import { PhotoWrapper } from '../components/PhotoWrapper';

const mapStateToProps = (state) => {
	return {
		zoomed: state.zoom.zoomed,
		mousePosition: state.mousePosition,
		dragActive: state.zoom.dragActive,
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
		toggleDrag: () => {
			dispatch(toggleDrag())
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