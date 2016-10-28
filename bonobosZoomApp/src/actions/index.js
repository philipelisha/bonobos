/*
 * action types
 */

export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';

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