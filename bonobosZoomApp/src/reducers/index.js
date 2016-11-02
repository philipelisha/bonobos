import { TOGGLE_ZOOM, MOVE_MOUSE, UPDATE_DRAG, SCREEN_RESIZE, SET_TRANSITION, SET_DRAG } from '../actions';
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
            return Object.assign({}, state, {
                screenWidth: action.screenWidth,
                screenHeight: action.screenHeight
            })
        default:
        	return state
	}
}

function zoom(state = {
	zoomed: false,
	dragPosition: [0,0],
	noTransition: false,
	dragActive: false,
	initialDragPos: [0,0]
}, action) {
	switch (action.type) {
		case TOGGLE_ZOOM:
			return Object.assign({}, state, {
				zoomed: !state.zoomed,
				dragPosition: !state.zoomed ? [0,0] : state.dragPosition
			})
		case UPDATE_DRAG:
			return Object.assign({}, state, {
				dragPosition: action.pos
			})
		case SET_TRANSITION:
			return Object.assign({}, state, {
				noTransition: action.val
			})
		case SET_DRAG:
			return Object.assign({}, state, {
				dragActive: action.val,
				initialDragPos: action.initialDragPos
			})
		default:
	  		return state
  }
}


export const zoomApp = combineReducers({
	mousePosition,
	zoom,
	screenSize
});
