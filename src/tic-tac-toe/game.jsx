
import data from './game-data'
import Rendering from '../rendering-component/rendering'
import { useEffect, useState } from 'react'

export default function Game() {

    const [square, setSquare] = useState(Array(9).fill(""));
    const [Xturn, setXturn] = useState(true);
    const [status, setStatus] = useState('');


    function fetchWinner(square) {
        const winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i];

            if (square[x] && square[x] === square[y] && square[x] === square[z]) {
                return square[x];
            }
        }
        return null;
    }
    function handleClick(getCurrentIndex) {

        let cpySquare = [...square];
        if (fetchWinner(cpySquare) || cpySquare[getCurrentIndex]) return;

        cpySquare[getCurrentIndex] = Xturn ? 'X' : 'O';
        setXturn(!Xturn);
        setSquare(cpySquare);

    }

    function handleRestart(){

        setSquare(Array(9).fill(''))
        setXturn(true);
    }



    function Square({ value, handleClick }) {
        return <button onClick={handleClick}>{value}</button>
    }

    function renderingBox() {
        return (
            <div className='demo-box tic-tac-toe'>
                <div className="game-wrapper">
                    <div className="game">
                        <div className="row">
                            <Square value={square[0]} handleClick={() => handleClick(0)} />
                            <Square value={square[1]} handleClick={() => handleClick(1)} />
                            <Square value={square[2]} handleClick={() => handleClick(2)} />

                        </div>
                        <div className="row">
                            <Square value={square[3]} handleClick={() => handleClick(3)} />
                            <Square value={square[4]} handleClick={() => handleClick(4)} />
                            <Square value={square[5]} handleClick={() => handleClick(5)} />
                        </div>
                        <div className="row">
                            <Square value={square[6]} handleClick={() => handleClick(6)} />
                            <Square value={square[7]} handleClick={() => handleClick(7)} />
                            <Square value={square[8]} handleClick={() => handleClick(8)} />
                        </div>
                    </div>
                    <p>{status}</p>
                    <button onClick={handleRestart}>Restart</button>

                </div>
            </div>
        )
    }
    console.log(square);
    useEffect(() => {
        if(!fetchWinner(square) && square.every(item => item !== '')){
            setStatus(`This is draw ! Please restart the game`);
        }
        else if(fetchWinner(square)){
            setStatus(`Winner is ${fetchWinner(square)}`);
        }else{
            setStatus(`Next player is ${Xturn ? 'X' : 'O'}`)
        }
    }, [Xturn, square])
    return (
        <Rendering data={data} demoBox={renderingBox()} />
    )
}
