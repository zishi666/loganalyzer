import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export const DonutChart = () => {
	const options = {
			animationEnabled: true,
			data: [{
				type: "doughnut",
				dataPoints: [
					{ name: "Success", y: 500, color: "#248577" },
					{ name: "Information", y: 31, color: "#70ABAF" },
					{ name: "Warning", y: 40, color: "#df3535" }
				]
			}]
        }
	
		return (
			<CanvasJSChart options = {options}/>
        );
	
}


export const  BarChart = () => {
		const options = {
			animationEnabled: true,
			axisY:{
				title: "EVENT COUNT",
				titleFontColor : "#C4C4C4",
				titleFontFamily: "Poppins, sans-serif",
				titleFontSize : 40,
				labelFontColor: "#C4C4C4",
				gridThickness: 4,
				gridColor: '#C4C4C4',
				tickThickness: 0,
				lineColor: "#C4C4C4",
			   },
			axisX : {
				labelFontColor: "#C4C4C4",
				labelAngle: -45,
				tickThickness: 0,
				lineColor: "#C4C4C4",
			   },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "INFORMATION",  y: 50000, color: '#366074',  },
					{ label: "SUCCESS", y: 30000, color: '#aaf170' },
					{ label: "WARNING", y: 12000, color: '#ecaa30' },
					{ label: "ERROR",  y: 7000, color: '#F91010' },
					{ label: "FAILURE",  y: 25000, color: '#616161' }
				]
			}
			]
		}
		return (
		<div style={{width: '100%'}}>
			<CanvasJSChart options = {options}/>
		</div>
		);
}

export const DHCPBarChart = () => {
	const options = {
		backgroundColor: "transparent",
		animationEnabled: true,
		axisY:{
			labelFontColor: "#C4C4C4",
			gridThickness: 4,
			gridColor: '#C4C4C4',
			tickThickness: 0,
			lineColor: "#C4C4C4",
		   },
		axisX : {
			labelFontColor: "transparent",
			labelAngle: -45,
			tickThickness: 0,
			lineColor: "#C4C4C4",
		   },
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "INFORMATION",  y: 50000, color: '#366074',  },
				{ label: "SUCCESS", y: 30000, color: '#aaf170' },
				{ label: "WARNING", y: 12000, color: '#ecaa30' },
				{ label: "ERROR",  y: 7000, color: '#F91010' },
				{ label: "FAILURE",  y: 25000, color: '#616161' }
			]
		}
		]
	}
	return (
	<div style={{width: '100%'}}>
		<CanvasJSChart options = {options}/>
	</div>
	);
}