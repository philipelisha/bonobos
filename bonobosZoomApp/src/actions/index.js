/*
 * action types
 */

export const TOGGLE_ZOOM = 'TOGGLE_ZOOM';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const UPDATE_DRAG = 'UPDATE_DRAG';
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

export const updateDrag = (pos) => {
	return {
		type: 'UPDATE_DRAG',
		pos
	}
}

export const screenResize = ([width, height]) => {
    return {
        type: SCREEN_RESIZE,
        screenWidth: width,
        screenHeight: height
    };
}