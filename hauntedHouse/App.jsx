import React from "react"
import { nanoid } from "nanoid"
import housesForSale from "./data/housesForSale"
import HouseCard from "./components/HouseCard.jsx"



export default function App() {
    
	const houseCards = housesForSale.map((houseData, index, array) => {
		return (
			<HouseCard 
				key={houseData.id}
				houseData={houseData}
				index={index}
				array={array}
			/>
		)
	})

	return (
		<div className="wrapper">
			<header>
			<h1 className="logo">Hauted houses</h1>
			</header>
			<div className="house-cards-container">
                {houseCards}
            </div>
		</div>
	)
}
