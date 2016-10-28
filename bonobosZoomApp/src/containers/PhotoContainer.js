import { connect } from 'react-redux';
import { zoomOut, toggleDrag } from '../actions'
import ZoomButton from '../components/ZoomButton'

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
)(ZoomButton)