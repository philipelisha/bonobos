/*
 * action types
 */

export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const TOGGLE_DRAG = 'TOGGLE_DRAG';
export const UPDATE_DRAG = 'UPDATE_DRAG';

/*
 * action creators
 */

export const zoomIn = () => {
	return {
		type: 'ZOOM_IN'
	}
}

export const zoomOut = () => {
	return {
		type: 'ZOOM_OUT'
	}
}

export const moveMouse = () => {
	return {
		type: 'MOVE_MOUSE'
	}
}