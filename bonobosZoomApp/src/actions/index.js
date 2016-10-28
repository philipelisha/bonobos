/*
 * action types
 */

export const TOGGLE_ZOOM = 'TOGGLE_ZOOM';
export const ZOOM_OUT = 'ZOOM_OUT';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const TOGGLE_DRAG = 'TOGGLE_DRAG';
export const UPDATE_DRAG = 'UPDATE_DRAG';

/*
 * action creators
 */

export const zoomIn = () => {
	return {
		type: 'TOGGLE_ZOOM'
	}
}

export const moveMouse = () => {
	return {
		type: 'MOVE_MOUSE'
	}
}

export const toggleDrag = () => {
	return {
		type: 'TOGGLE_DRAG'
	}
}

export const updateDrag = (pos) => {
	return {
		type: 'UPDATE_DRAG',
		pos
	}
}