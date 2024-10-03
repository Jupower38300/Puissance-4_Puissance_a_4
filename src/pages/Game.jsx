import { useState } from "react";
import * as Board from "../components/Board";
import * as Token from "../components/tokens";

export default function Game() {
    const [isPlayer1Turn, setIsPlayer1Turn] = useState(true); // Start with Player 1's turn

    // Toggle player turn when a move is made
    function handlePlayerMove() {
        setIsPlayer1Turn((prev) => !prev);
    }

    return (
        <div className="flex flex-col w-screen h-screen justify-start items-center bg-[#2a2255]">
            {/* Section Players */}
            <div className="flex w-full max-w-[50em] justify-between p-10">
                <Player1 IsPlayer1={isPlayer1Turn} />
                <Player2 IsPlayer2={!isPlayer1Turn} />
            </div>

            {/* Board Section - Pass the current player state and the toggle function */}
            <Board.Board
                rows={6}
                cols={7}
                isPlayer1Turn={isPlayer1Turn}
                onPlayerMove={handlePlayerMove}
            />
        </div>
    );
}

// Player1 Component
function Player1({ IsPlayer1 }) {
    return (
        <div className="text-white flex flex-row justify-between items-center w-[8em] text-3xl">
            {IsPlayer1 ? <Token.TokenActive /> : <Token.Token />}
            <h1>Player 1</h1>
        </div>
    );
}

// Player2 Component
function Player2({ IsPlayer2 }) {
    return (
        <div className="text-white flex flex-row justify-between items-center w-[8em] text-3xl">
            <h1>Player 2</h1>
            {IsPlayer2 ? <Token.TokenActive /> : <Token.Token />}
        </div>
    );
}
