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
		const { dragPosition, mousePosition, zoomed, dragActive, setDrag } = this.props;

		if ( zoomed && !dragActive ) {
			const initialDragPosX = mousePosition[0] - dragPosition[0];
			const initialDragPosY = mousePosition[1] - dragPosition[1];
			setDrag(true, [initialDragPosX, initialDragPosY]);

			window.addEventListener('mouseup', () => {
				this.endDrag();
			});
		}
	}

	moveMouse(e) {
		const { moveMouse, dragActive, calculateDrag } = this.props;
		const newPos = [e.clientX, e.clientY];

		if ( dragActive ) {
			debounce(calculateDrag(), 0);
		}

		moveMouse(newPos);
	}

	endDrag() {
		const { setDrag } = this.props;
		setDrag(false, [0,0]);
		
		window.removeEventListener('mouseup', () => {
			this.endDrag();
		});
	}

	render() {
		const { screenHeight, screenWidth, dragPosition, toggleZoom, zoomed, noTransition, dragActive } = this.props;

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
			userSelect: "none"
		}
		return (
			<div style={wrapperStyle} className="ui container zoomable_image--component">
				<div 
					style={imgWrapperStyle} 
					className={imgWrapperClass} 
					onMouseMove={this.moveMouse}
					onMouseDown={this.startDrag}
					onClick={!zoomed ? toggleZoom : null}>
					<img 
						className="zoomable_image" 
						width={screenHeight} 
						height={screenHeight} 
						style={imgStyle} 
						role="presentation"
						src="https://bonobos-prod-s3.imgix.net/products/12465/original/PANT_WashedChinos_TheKhakis_hero1.jpg?h=7000&w=7000" />
				</div>
				<ZoomButtons zoomed={zoomed} toggleZoom={toggleZoom} />
			</div>
		);
	}
}
