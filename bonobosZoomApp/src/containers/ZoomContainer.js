import { connect } from 'react-redux';
import { zoomIn, zoomOut } from '../actions'
import ZoomButton from '../components/ZoomButton'

const mapStateToProps = (state) => {
	return {
		zoomed: state.zoomed
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		zoomIn: () => {
			dispatch(zoomIn())
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