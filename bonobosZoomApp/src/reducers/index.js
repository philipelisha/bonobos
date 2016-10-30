import { TOGGLE_ZOOM, MOVE_MOUSE, TOGGLE_DRAG, UPDATE_DRAG, SCREEN_RESIZE } from '../actions';
import { combineReducers } from 'redux';

const screenWidth = typeof window === 'object' ? window.innerWidth : null;
const screenHeight = typeof window === 'object' ? window.innerHeight : null;

function mousePosition(state = [], action) {
	switch (action.type) {
		case MOVE_MOUSE:
			return action.pos
		default:
			return state
  }
}

function screenSize(state = {
	screenWidth,
	screenHeight
}, action) {
	switch (action.type) {
		case SCREEN_RESIZE:
            return {
            	...state,
                screenWidth: action.screenWidth,
                screenHeight: action.screenHeight
            }
        default:
        	return state
	}
}

function zoom(state = {
	zoomed: false,
	dragActive: false,
	dragPosition: [0,0]
}, action) {
	switch (action.type) {
		case TOGGLE_ZOOM:
			return {
				...state,
				zoomed: !state.zoomed
			}
		case TOGGLE_DRAG:
			return {
				...state,
				dragActive: !state.dragActive
			}
		case UPDATE_DRAG:
			return {
				...state,
				dragPosition: action.pos
			}
		default:
	  		return state
  }
}


export const zoomApp = combineReducers({
	mousePosition,
	zoom,
	screenSize
});
