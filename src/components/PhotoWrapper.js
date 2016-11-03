import React, {Component} from 'react';
import "./Zoom.css";
import { ZoomButtons } from '../components/ZoomButtons';
import { debounce } from "../helpers/debounce";

export class PhotoWrapper extends Component {
	constructor(props) {
		super(props);

		this.startDrag = this.startDrag.bind(this);
		this.endDrag = this.endDrag.bind(this);
		this.moveMouse = this.moveMouse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { setTransition, noTransition, zoomed } = this.props;
		
		if ( noTransition === false && zoomed === false && nextProps.zoomed === true ) {
			setTimeout(() => setTransition(true), 350);
		} else if ( noTransition === true && zoomed === true && nextProps.zoomed === false ) {
			setTransition(false);
		}
	}

	startDrag(e) {
		e.preventDefault();
		const { dragPosition, zoomed, dragActive, setDrag, setZoomTrue } = this.props;

		if ( zoomed && !dragActive ) {
			const newPosEvent = e.targetTouches ? e.targetTouches[0] : e;
			const newPos = [newPosEvent.clientX, newPosEvent.clientY];

			const initialDragPosX = newPos[0] - dragPosition[0];
			const initialDragPosY = newPos[1] - dragPosition[1];
			setDrag(true, [initialDragPosX, initialDragPosY], dragPosition);

			window.addEventListener('mouseup', () => {
				this.endDrag();
			});
			window.addEventListener('touchend', () => {
				this.endDrag();
			});
		} else {
			setZoomTrue();
		}
	}

	moveMouse(e) {
		const { moveMouse, dragActive, calculateDrag } = this.props;

		const newPosEvent = e.targetTouches ? e.targetTouches[0] : e;
		const newPos = [newPosEvent.clientX, newPosEvent.clientY]

		moveMouse(newPos);

		if ( dragActive ) {
			debounce(calculateDrag(), 0);
		}

	}

	endDrag() {
		const { setDrag, dragPosition, oldDragPos, setZoomFalse, zoomed, dragActive } = this.props;
		
		if ( dragActive && zoomed ) {
			// check the threshold for dragging if its less than 5 pixels toggle zoom false
			if ( Math.abs(oldDragPos[0] - dragPosition[0]) < 5 && Math.abs(oldDragPos[1] - dragPosition[1]) < 5 ) {
				setZoomFalse();
			}
	
			setDrag(false, [0,0], dragPosition);
		}

		window.removeEventListener('mouseup', () => {
			this.endDrag();
		});
		window.removeEventListener('touchend', () => {
			this.endDrag();
		});
	}

	render() {
		const { screenHeight, screenWidth, dragPosition, setZoomTrue, setZoomFalse, zoomed, noTransition, dragActive } = this.props;

		const dragedPosition = `${dragPosition[0]}, ${dragPosition[1]})`;
		const matrix = zoomed ? 'matrix(3, 0, 0, 3, ' : 'matrix(1, 0, 0, 1, '
		const wrapperStyle = {
			    width: `${screenWidth}px`,
			    height: `${screenHeight}px`,
			    overflow: "hidden",
			    position: "relative"
		}
		const imgWrapperStyle = {
			    width: `${screenHeight}px`,
			    height: `${screenHeight}px`,
			    transform: matrix + dragedPosition,
			    backfaceVisibility: "hidden",
			    transformOrigin: "50% 50% 0px",
			    transition: !noTransition ? "transform 350ms ease-in-out" : "none"
		}
		const imgWrapperClass = !zoomed ? "zoomable_image--zoomInCursor" : (dragActive ? "zoomable_image--grabbingCursor" : "zoomable_image--grabCursor");
		const imgStyle = {
			touchAction: "pan-y",
			userSelect: "none",
		    "WebkitUserSelect": "none",
		    "WebkitUserDrag": "none",
		    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
		}
		return (
			<div style={wrapperStyle} className="ui container zoomable_image--component">
				<div 
					style={imgWrapperStyle} 
					className={imgWrapperClass} 
					onMouseDown={this.startDrag}
					onMouseMove={this.moveMouse}
					onTouchStart={this.startDrag}
					onTouchMove={this.moveMouse}>
					<img 
						className="zoomable_image" 
						width={screenHeight} 
						height={screenHeight} 
						style={imgStyle} 
						role="presentation"
						src="https://bonobos-prod-s3.imgix.net/products/12465/original/PANT_WashedChinos_TheKhakis_hero1.jpg?h=7000&w=7000" />
				</div>
				<ZoomButtons zoomed={zoomed} setZoomTrue={setZoomTrue} setZoomFalse={setZoomFalse} />
			</div>
		);
	}
}
