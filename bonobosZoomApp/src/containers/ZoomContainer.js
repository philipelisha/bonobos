import { connect } from 'react-redux';
import { toggleZoom } from '../actions';
import { ZoomButtons } from '../components/ZoomButtons';

const mapStateToProps = (state) => {
	return {
		zoomed: state.zoom.zoomed
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleZoom: () => {
			dispatch(toggleZoom())
		}
	}
}

export const ZoomContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ZoomButtons)