import React, {Component} from 'react';
import "./Zoom.css";
import { ZoomButtons } from '../components/ZoomButtons';
import { debounce } from "../helpers/debounce";

export class PhotoWrapper extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			noTransition: false,
			initialDragPosX: 0,
			initialDragPosY: 0,
			dragActive: false
		}

		this.startDrag = this.startDrag.bind(this);
		this.endDrag = this.endDrag.bind(this);
		this.moveMouse = this.moveMouse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if ( nextProps.zoomed ) {
			setTimeout(()=>this.setState({noTransition: true}), 250)
		} else {
			this.setState({noTransition: false})
		}
	}

	moveMouse(e) {
		const { moveMouse, updateDrag, screenHeight, screenWidth } = this.props;
		const { initialDragPosX, initialDragPosY, dragActive } = this.state;
		const newPos = [e.clientX, e.clientY];
		const xBounds = (screenWidth - screenHeight)/2;
		
		if ( dragActive ) {
			let newDragPosX = (newPos[0] - initialDragPosX);
			newDragPosX = newDragPosX > xBounds ? xBounds : (newDragPosX < (xBounds * -1) ? xBounds * -1 : newDragPosX);
			let newDragPosY = (newPos[1] - initialDragPosY);
			newDragPosY = newDragPosY > screenHeight ? screenHeight : (newDragPosY < (screenHeight * -1) ? screenHeight * -1 : newDragPosY);
			debounce(updateDrag([newDragPosX, newDragPosY]), 0);
		}

		moveMouse(newPos);
	}

	startDrag(e) {
		e.preventDefault();
		const { dragPosition, mousePosition, zoomed } = this.props;
		const { dragActive } = this.state;

		if ( zoomed && !dragActive ) {
			this.setState({
				dragActive: true,
				initialDragPosX: mousePosition[0] - dragPosition[0],
				initialDragPosY: mousePosition[1] - dragPosition[1]
			});

			window.addEventListener('mouseup', () => {
				this.endDrag();
			});
		}
	}

	endDrag() {
		this.setState({
			dragActive: false,
			initialDragPos: [0,0]
		});
		
		window.removeEventListener('mouseup', () => {
			this.endDrag();
		});
	}

	render() {
		const { screenHeight, screenWidth, dragPosition, toggleZoom, zoomed } = this.props;
		const { dragActive, noTransition } = this.state;
		const dragedPosition = "matrix(3, 0, 0, 3, " + dragPosition[0] + ", " + dragPosition[1] + ")";
		const wrapperStyle = {
			    width: screenWidth + "px",
			    height: screenHeight + "px",
			    overflow: "hidden",
			    position: "relative"
		}
		const imgWrapperStyle = {
			    width: screenHeight + "px",
			    height: screenHeight + "px",
			    transform: zoomed ? dragedPosition : "matrix(1, 0, 0, 1, 0, 0)",
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
