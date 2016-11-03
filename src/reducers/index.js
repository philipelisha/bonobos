import { SET_ZOOM_FALSE, SET_ZOOM_TRUE, MOVE_MOUSE, CALCULATE_DRAG, SCREEN_RESIZE, SET_TRANSITION, SET_DRAG } from '../actions';
import { combineReducers } from 'redux';

const screenWidth = typeof window === 'object' ? window.innerWidth : null;
const screenHeight = typeof window === 'object' ? window.innerHeight : null;

const mousePosition = function(state = [], action) {
	switch (action.type) {
		case MOVE_MOUSE:
			return action.pos
		default:
			return state
  }
}

const screenSize = function(state = {
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

const calculateDragPosition = (state) => {
	const { mousePosition } = state;
	const { screenHeight } = state.screenSize;
	const { initialDragPos } = state.zoom;
	let newDragPosX = (mousePosition[0] - initialDragPos[0]);
	let newDragPosY = (mousePosition[1] - initialDragPos[1]);
	newDragPosX = newDragPosX > screenHeight ? screenHeight : (newDragPosX < (screenHeight * -1) ? screenHeight * -1 : newDragPosX);
	newDragPosY = newDragPosY > screenHeight ? screenHeight : (newDragPosY < (screenHeight * -1) ? screenHeight * -1 : newDragPosY);

	return [newDragPosX, newDragPosY]
}

const zoom = function(state = {
	zoomed: false,
	dragPosition: [0,0],
	noTransition: false,
	dragActive: false,
	initialDragPos: [0,0],
	oldDragPos: [0,0]
}, action) {
	switch (action.type) {
		case SET_ZOOM_FALSE:
			return Object.assign({}, state.zoom, {
				zoomed: false,
				dragPosition: [0,0]
			})
		case SET_ZOOM_TRUE:
			return Object.assign({}, state.zoom, {
				zoomed: true
			})
		case CALCULATE_DRAG:
			return Object.assign({}, state.zoom, {
				dragPosition: calculateDragPosition(state)
			})
		case SET_TRANSITION:
			return Object.assign({}, state.zoom, {
				noTransition: action.val
			})
		case SET_DRAG:
			return Object.assign({}, state.zoom, {
				dragActive: action.val,
				initialDragPos: action.initialDragPos,
				oldDragPos: action.oldDragPos
			})
		default:
	  		return state
  }
}

const parentReducer = function(state = {
	screenSize: {
		screenWidth,
		screenHeight
	},
	mousePosition: [],
	zoom: {
		zoomed: false,
		dragPosition: [0,0],
		noTransition: false,
		dragActive: false,
		initialDragPos: [0,0]
	}
}, action = '') {
  switch (action.type) {
    case SCREEN_RESIZE:
    	return Object.assign({}, state, {
			screenSize: screenSize(state.screenSize, action)
		})
    case MOVE_MOUSE:
    	return Object.assign({}, state, {
			mousePosition: mousePosition(state.mousePosition, action)
		})
    case SET_ZOOM_FALSE:
    case SET_ZOOM_TRUE:
    case CALCULATE_DRAG:
    case SET_TRANSITION:
    case SET_DRAG:
    	return Object.assign({}, state, {
			zoom: zoom(state, action)
		})
    default:
      return state
  }
}

export const App = combineReducers({parentReducer});
