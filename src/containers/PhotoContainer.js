import { connect } from 'react-redux';
import { setZoomFalse, setZoomTrue, moveMouse, setTransition, setDrag, calculateDrag } from '../actions';
import { PhotoWrapper } from '../components/PhotoWrapper';

const mapStateToProps = (state) => {
	const { parentReducer } = state;
	const { zoom, screenSize } = parentReducer;
	return {
		zoomed: zoom.zoomed,
		noTransition: zoom.noTransition,
		dragActive: zoom.dragActive,
		oldDragPos: zoom.oldDragPos,
		dragPosition: zoom.dragPosition,
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
		setDrag: (val, initialMousePos, oldDragPos) => {
			dispatch(setDrag(val, initialMousePos, oldDragPos))
		}
	}
}

export const PhotoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoWrapper)