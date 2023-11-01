import React from "react"
import Enemy from "./components/Enemy"
import Button from "./components/Button"
import runGame from "./utilities/runGame"
import initialEnemyData from "./data/initialEnemyData"

export default function App() {

	const [gameRunning, setGameRunning] = React.useState(false)
	const [enemiesData, setEnemiesData] = React.useState(initialEnemyData)

	runGame(gameRunning, setEnemiesData)

	const enemies = enemiesData.map(enemy => <Enemy key={enemy.id} {...enemy} /> )

	return (
		<div className="wrapper">
			<div className="meadow-container">
				<div className="castle-container">

				 {enemies}
				{/* <Enemy {...enemiesData[1]} />
				<Enemy {...enemiesData[2]} /> */}
					{/* <Enemy
						currentImage={enemiesData[0].currentImage}
						position={enemiesData[0].position}
						orientation={enemiesData[0].orientation}
					/>
					<Enemy
						currentImage={enemiesData[1].currentImage}
						position={enemiesData[1].position}
						orientation={enemiesData[1].orientation}
					/>
					<Enemy
						currentImage={enemiesData[2].currentImage}
						position={enemiesData[2].position}
						orientation={enemiesData[2].orientation}
					/> */}
				</div>
			</div>

			<Button stateProps={{ gameRunning, setGameRunning }} />
		</div>
	)
}
