import { connect } from 'react-redux';
import { toggleZoom, toggleDrag } from '../actions';
import { PhotoWrapper } from '../components/PhotoWrapper';

const mapStateToProps = (state) => {
	return {
		zoomed: state.zoom.zoomed,
		dragActive: state.zoom.dragActive,
		dragPosition: state.zoom.dragPosition,
		screenWidth: state.screenSize.screenWidth,
		screenHeight: state.screenSize.screenHeight
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDrag: () => {
			dispatch(toggleDrag())
		},
		toggleZoom: () => {
			dispatch(toggleZoom())
		},
	}
}

export const PhotoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoWrapper)