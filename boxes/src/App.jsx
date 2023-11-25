import React from "react";
import boxes from "./boxes";
import Box from "./Box";
import './App.css';
import './box.css';

export default function App() {
    const [squares, setSquares] = React.useState(boxes);
    useEffect(() => {

        setSquares(boxes);
    }, []); 


    function toggle(row, col) {
        checkNeighbors(row, col, squares, setSquares);

        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.row === row && square.col === col
                    ? { ...square, on: !square.on }
                    : square;
            });
        });
    }

    const squareElements = squares.map((square) => (
        <Box
            key={square.id}
            on={square.on}
            toggle={() => toggle(square.row, square.col)}
        />
    ));

    return (
        <div className="container">
            <main className="App">
                {squareElements}
            </main>
        </div>
    );
}

function checkNeighbors(row, col, squares, setSquares) {
    const onNeighbors = [];

    const checkAndPush = (r, c) => {
        if (r >= 0 && r < squares.length && c >= 0 && c < squares[0].length) {
            if (squares[r * squares[0].length + c].on) {
                onNeighbors.push({ row: r, col: c });
            }
        }
    };

    checkAndPush(row + 1, col);
    checkAndPush(row - 1, col);
    checkAndPush(row, col + 1);
    checkAndPush(row, col - 1);

    if (onNeighbors.length > 2) {
        console.log("POINT!");
        setSquares(prevSquares => {
            return prevSquares.map(square => ({ ...square, backgroundColor: "red" }));
        });
    }
}