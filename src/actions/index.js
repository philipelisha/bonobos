/*
 * action types
 */

export const SET_ZOOM_FALSE = 'SET_ZOOM_FALSE';
export const SET_ZOOM_TRUE = 'SET_ZOOM_TRUE';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const CALCULATE_DRAG = 'CALCULATE_DRAG';
export const SET_TRANSITION = 'SET_TRANSITION';
export const SET_DRAG = 'SET_DRAG';
export const SCREEN_RESIZE = 'SCREEN_RESIZE';

/*
 * action creators
 */

export const setZoomFalse = () => {
	return {
		type: 'SET_ZOOM_FALSE'
	}
}

export const setZoomTrue = () => {
	return {
		type: 'SET_ZOOM_TRUE'
	}
}

export const moveMouse = (pos) => {
	return {
		type: 'MOVE_MOUSE',
		pos
	}
}

export const calculateDrag = () => {
	return {
		type: 'CALCULATE_DRAG'
	}
}

export const setTransition = (val) => {
	return {
		type: 'SET_TRANSITION',
		val
	}
}

export const setDrag = (val, initialDragPos, oldDragPos) => {
	return {
		type: 'SET_DRAG',
		val,
		initialDragPos,
		oldDragPos
	}
}

export const screenResize = ([width, height]) => {
	return {
		type: SCREEN_RESIZE,
		screenWidth: width,
		screenHeight: height
	};
}
