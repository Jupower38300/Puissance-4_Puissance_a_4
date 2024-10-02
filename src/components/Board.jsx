
    export function Board({ rows, cols }) {
        const createGrid = () => {
            const grid = [];
            for (let crow = 0; crow < rows; crow++) {
                const row = [];
                for (let ccol = 0; ccol < cols; ccol++) {
                    row.push(<td className="w-9 h-9 bg-black" key={`${crow}-${ccol}`}></td>);
                }
                grid.push(<tr key={crow}>{row}</tr>);
            }
            return grid;
        };
    
        return (
            <>
                <div className="table">
                    <table className="table-auto w-full border-separate border-spacing-2">
                        <thead>
                        </thead>
                        <tbody>
                            {createGrid()}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }