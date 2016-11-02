/*
 * action types
 */

export const TOGGLE_ZOOM = 'TOGGLE_ZOOM';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const CALCULATE_DRAG = 'CALCULATE_DRAG';
export const SET_TRANSITION = 'SET_TRANSITION';
export const SET_DRAG = 'SET_DRAG';
export const SCREEN_RESIZE = 'SCREEN_RESIZE';

/*
 * action creators
 */

export const toggleZoom = () => {
	return {
		type: 'TOGGLE_ZOOM'
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

export const setDrag = (val, initialDragPos) => {
	return {
		type: 'SET_DRAG',
		val,
		initialDragPos
	}
}

export const screenResize = ([width, height]) => {
    return {
        type: SCREEN_RESIZE,
        screenWidth: width,
        screenHeight: height
    };
}