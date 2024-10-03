import * as Board from "../components/Board";
import * as Token from "../components/tokens";

export default function Game() {
    function Player1({ isPlayerTurn }) {
        return (
            <div className="text-white flex flex-row justify-between items-center w-[5em] text-3xl">
                {isPlayerTurn ? <Token.TokenActive /> : <Token.Token />}
                <h1>USER</h1>
            </div>
        );
    }

    function Player2({ isPlayerTurn }) {
        return (
            <div className="text-white flex flex-row justify-between items-center w-[5em] text-3xl">
                <h1>USER</h1>
                {isPlayerTurn ? <Token.TokenActive /> : <Token.Token />}
            </div>
        );
    }

    return (
        <div className="flex flex-col w-screen h-screen justify-start items-center bg-[#2a2255]">
            {/* Section Joueurs */}
            <div className="flex w-full max-w-[50em] justify-between p-10">
                <Player1 />
                <Player2 />
            </div>

            {/* Section Grille */}
            <Board.Board rows={6} cols={7} />
        </div>
    );
}