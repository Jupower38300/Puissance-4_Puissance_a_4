import { useState, useEffect } from "react";
import * as Board from "../components/Board";
import * as Token from "../components/tokens";

// export default function Game() {
//     const [isPlayer1Turn, setIsPlayer1Turn] = useState(true); // Start with Player 1's turn

//     // Toggle player turn when a move is made
//     function handlePlayerMove() {
//         setIsPlayer1Turn((prev) => !prev);
//     }

//     return (

//         <div className="flex flex-col w-screen h-screen justify-start items-center bg-[#2a2255]">

//             <div className="flex w-full max-w-[50em] justify-between p-10 mt-10 mb-10">
//                 <Player1 IsPlayer1={isPlayer1Turn} />
//                 <Player2 IsPlayer2={!isPlayer1Turn} />
//             </div>


//             <Board.Board
//                 rows={6}
//                 cols={7}
//                 isPlayer1Turn={isPlayer1Turn}
//                 onPlayerMove={handlePlayerMove}
//             />

//         </div>
//     );
// }

// // Player1 Component
// function Player1({ IsPlayer1 }) {
//     return (
//         <div className="text-white flex flex-row justify-between items-center w-[8em] text-3xl">
//             {IsPlayer1 ? <Token.TokenActive color="bg-red-500" /> : <Token.Token color="bg-red-500"/>}
//             <h1>Player 1</h1>
//         </div>
//     );
// }

//  function Player2({ IsPlayer2 }) {
//      return (
//          <div className="text-white flex flex-row justify-between items-center w-[8em] text-3xl">
//             <h1>Player 2</h1>
//             {IsPlayer2 ? <Token.TokenActive color="bg-yellow-500" /> : <Token.Token color="bg-yellow-500" />}
//          </div>
//         );
//  }

export default function Game({ gameId }) {
    const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [board, setBoard] = useState([]);
    const [winner, setWinner] = useState(null);
    const [winningPieces, setWinningPieces] = useState([]);

    useEffect(() => {
        // Fetch game state and player names from the server
        fetch(`/game/${gameId}`)
            .then(res => res.json())
            .then(data => {
                setPlayer1(data.player1);
                setPlayer2(data.player2);
                setBoard(JSON.parse(data.board_state)); // Parse the board state JSON
                setIsPlayer1Turn(data.current_turn === 'player1');
            });
    }, [gameId]);

    // Save game state to server
    function saveGameState(newBoard, currentTurn) {
        fetch(`/game/${gameId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                boardState: JSON.stringify(newBoard),
                currentTurn: currentTurn ? 'player1' : 'player2',
            }),
        });
    }

    // Check for win (same as your original implementation)
    function checkWin(board, row, col, player) {
        return (
            checkDirection(board, row, col, player, 0, 1) || // Check horizontally
            checkDirection(board, row, col, player, 1, 0) || // Check vertically
            checkDirection(board, row, col, player, 1, 1) || // Check diagonal (bottom-left to top-right)
            checkDirection(board, row, col, player, 1, -1)   // Check diagonal (top-left to bottom-right)
        );
    }

    function checkDirection(board, row, col, player, rowIncrement, colIncrement) {
        let count = 0;
        let winningCells = [];

        for (let i = -3; i <= 3; i++) {
            const newRow = row + i * rowIncrement;
            const newCol = col + i * colIncrement;

            if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length && board[newRow][newCol] === player) {
                winningCells.push([newRow, newCol]);
                count++;
                if (count === 4) return winningCells; // Return the winning cells' positions if 4 in a row
            } else {
                count = 0; // Reset count if interrupted
                winningCells = []; // Reset the winning cells array
            }
        }
        return null;
    }

    function handlePlayerMove(col) {
        if (winner) return; // If game is over, no further moves allowed

        // Find the first available row in the selected column
        for (let row = board.length - 1; row >= 0; row--) {
            if (!board[row][col]) {
                const newBoard = [...board];
                newBoard[row][col] = isPlayer1Turn ? 'P1' : 'P2'; // Set the correct player's token

                setBoard(newBoard);

                // Check if the move results in a win
                const winCheck = checkWin(newBoard, row, col, newBoard[row][col]);
                if (winCheck) {
                    setWinner(newBoard[row][col]);
                    setWinningPieces(winCheck); // Set the winning pieces' positions
                } else {
                    // Toggle the turn if no win
                    setIsPlayer1Turn(prev => !prev);
                }
                // Save the game state to the server after making the move
                saveGameState(newBoard, !isPlayer1Turn);
                break;
            }
        }
    }

    return (
        <div className="flex flex-col w-screen h-screen justify-start items-center bg-[#2a2255]">
            <div className="flex w-full max-w-[50em] justify-between p-10 mt-10 mb-10">
                <Player name={player1} isActive={isPlayer1Turn} color="bg-red-500" />
                <Player name={player2} isActive={!isPlayer1Turn} color="bg-yellow-500" />
            </div>

            <Board board={board} isPlayer1Turn={isPlayer1Turn} onPlayerMove={handlePlayerMove} />
            {winner && <div className="text-white mt-5 text-2xl">{winner} wins!</div>}
        </div>
    );
}

function Player({ name, isActive, color }) {
    return (
        <div className="text-white flex flex-row justify-between items-center w-[8em] text-3xl">
            {isActive ? <Token.TokenActive color={color} /> : <Token.Token color={color} />}
            <h1>{name}</h1>
        </div>
    );
}

