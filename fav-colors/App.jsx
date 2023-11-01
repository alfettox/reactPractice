import { nanoid } from "nanoid"
import colorData from "./data/colorData"		//import list of colors
import Header from "./components/Header"		

export default function App() {

	function ColorCard(props) {		
		return (
			<div className="color-card" style={{ background: props.color }}>
				<p>
					<span>{props.number}.</span> {props.color}
				</p>
			</div>
		)
	}
	
	var colors = colorData.map((col, index)=>{		//create a variable for each element from colorData
		return (
			<ColorCard 
				key={nanoid()}
				color={col}
				number={index + 1}
			/>
		)
	})
	
	return (
		<div className="wrapper">
			<Header /> 
			{colors}			
		</div>
	)
}
