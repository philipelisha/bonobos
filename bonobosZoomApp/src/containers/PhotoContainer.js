import { connect } from 'react-redux';
import { toggleZoom, moveMouse, updateDrag, setTransition, setDrag } from '../actions';
import { PhotoWrapper } from '../components/PhotoWrapper';

const mapStateToProps = (state) => {
	return {
		zoomed: state.zoom.zoomed,
		dragActive: state.zoom.dragActive,
		initialDragPos: state.zoom.initialDragPos,
		noTransition: state.zoom.noTransition,
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
		setTransition: (val) => {
			dispatch(setTransition(val))
		},
		setDrag: (val, initialDragPos) => {
			dispatch(setDrag(val, initialDragPos))
		}
	}
}

export const PhotoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoWrapper)