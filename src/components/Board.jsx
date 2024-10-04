import { useState } from "react";

export function Board({ rows, cols, isPlayer1Turn, onPlayerMove }) {
    const [board, setBoard] = useState(Array(rows).fill(null).map(() => Array(cols).fill(null)));
    const [winner, setWinner] = useState(null); // Track if there's a winner
    const [winningPieces, setWinningPieces] = useState([]); // Track the winning pieces' positions

    function handleClick(col) {
        if (winner) return; // If game is over, no further moves allowed

        // Find the first available row in the selected column
        for (let row = rows - 1; row >= 0; row--) {
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
                    onPlayerMove();
                }
                break;
            }
        }
    }

    // Function to check for a win (horizontal, vertical, diagonal)
    function checkWin(board, row, col, player) {
        return (
            checkDirection(board, row, col, player, 0, 1) || // Check horizontally
            checkDirection(board, row, col, player, 1, 0) || // Check vertically
            checkDirection(board, row, col, player, 1, 1) || // Check diagonal (bottom-left to top-right)
            checkDirection(board, row, col, player, 1, -1)   // Check diagonal (top-left to bottom-right)
        );
    }

    // Function to check in a specific direction (e.g., horizontal or vertical)
    function checkDirection(board, row, col, player, rowIncrement, colIncrement) {
        let count = 0;
        let winningCells = [];

        // Check in one direction (e.g., right for horizontal, up for vertical)
        for (let i = -3; i <= 3; i++) {
            const newRow = row + i * rowIncrement;
            const newCol = col + i * colIncrement;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] === player) {
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

    // Render the game grid with animations and winning highlights
    const createGrid = () => {
        const grid = [];
        for (let row = 0; row < rows; row++) {
            const rowCells = [];
            for (let col = 0; col < cols; col++) {
                const isWinningCell = winningPieces.some(([winRow, winCol]) => winRow === row && winCol === col);
                const isDroppedToken = board[row][col] !== null; // Check if the cell has a token
    
                // Set animation delay based on how far the piece is from the top
                const delay = `${(rows - row) * 0.05}s`; // Slightly reduced delay for faster animation
    
                rowCells.push(
                    <td
                        key={`${row}-${col}`}
                        className={`w-[60px] h-[60px] bg-[#132445] rounded-full shadow-black shadow-[inset_-7px_-7px_10px_-5px] cursor-pointer transition-all duration-500 ease-out
                        ${board[row][col] === 'P1' ? 'bg-red-500 drop-token' : board[row][col] === 'P2' ? 'bg-yellow-500 drop-token' : ''}
                        ${!isDroppedToken ? 'bg-[#132445]' : ''} /* Ensure slot stays visible */
                        ${isWinningCell ? 'ring-4 ring-green-400' : ''}
                        `}
                        style={{
                            animationDelay: delay,
                        }}
                        onClick={() => handleClick(col)}
                    ></td>
                );
            }
            grid.push(<tr key={row}>{rowCells}</tr>);
        }
        return grid;
    };
    
    
    

    return (

        <div className="flex flex-col items-center">
            <table className="table-fixed border-separate border-spacing-4 bg-sky-900 rounded-t-3xl">
                <tbody>{createGrid()}</tbody>
            </table>
            {winner && <div className="text-white mt-5 text-2xl">{winner} wins!</div>}

            <style>
        {`

            @keyframes fall-bounce {
            0% {
                transform: translateY(-500%);
            }
            85% {
                transform: translateY(0%);
            }
            90% {
                transform: translateY(-10%);
            }
            100% {
                transform: translateY(0%);
            }
            }

            .drop-token {
            animation: fall-bounce 0.4s ease-out forwards; /* Faster (0.4s) and forwards to maintain final state */
            pointer-events: none; /* Disable pointer events during animation */
            }

        `}
      </style>
        </div>
    );
}

