import { connect } from 'react-redux';
import { setZoomFalse, setZoomTrue, moveMouse, setTransition, setDrag, calculateDrag } from '../actions';
import { PhotoWrapper } from '../components/PhotoWrapper';

const mapStateToProps = (state) => {
	const { parentReducer } = state;
	const { zoom, screenSize, mousePosition } = parentReducer;
	return {
		zoomed: zoom.zoomed,
		dragActive: zoom.dragActive,
		initialDragPos: zoom.initialDragPos,
		oldDragPos: zoom.oldDragPos,
		noTransition: zoom.noTransition,
		dragPosition: zoom.dragPosition,
		mousePosition: mousePosition,
		screenWidth: screenSize.screenWidth,
		screenHeight: screenSize.screenHeight
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		moveMouse: (pos) => {
			dispatch(moveMouse(pos))
		},
		calculateDrag: () => {
			dispatch(calculateDrag())
		},
		setZoomFalse: () => {
			dispatch(setZoomFalse())
		},
		setZoomTrue: () => {
			dispatch(setZoomTrue())
		},
		setTransition: (val) => {
			dispatch(setTransition(val))
		},
		setDrag: (val, initialDragPos, oldDragPos) => {
			dispatch(setDrag(val, initialDragPos, oldDragPos))
		}
	}
}

export const PhotoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoWrapper)