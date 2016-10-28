import { connect } from 'react-redux';
import { zoomOut, toggleDrag } from '../actions'
import PhotoWrapper from '../components/PhotoWrapper'

const mapStateToProps = (state) => {
	return {
		zoomed: state.zoomed,
		dragActive: state.dragActive,
		dragPosition: state.dragPosition
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDrag: () => {
			dispatch(toggleDrag())
		},
		zoomOut: () => {
			dispatch(zoomOut())
		},
	}
}

export const AccountsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoWrapper)