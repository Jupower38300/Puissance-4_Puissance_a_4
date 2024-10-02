
    export function Board({ rows, cols }) {
        const createGrid = () => {
            const grid = [];
            for (let crow = 0; crow < rows; crow++) {
                const row = [];
                for (let ccol = 0; ccol < cols; ccol++) {
                    row.push(<td className="w-11 h-11 bg-[#5e5e5e] rounded-full shadow-black shadow-[inset_-7px_-7px_10px_-5px]" key={`${crow}-${ccol}`}></td>);
                }
                grid.push(<tr key={crow}>{row}</tr>);
            }
            return grid;
        };
    
        return (
            <>
            <div className="table bg-gradient-to-br from-[#6b6861] to-[#46443f] rounded-3xl ">
                    <table className="table-auto w-full border-separate border-spacing-3 rounded-3xl shadow-inner ">
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