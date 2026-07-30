"use client";
import { useState } from "react";

export default function Extreme() {
  const [board, setBoard] = useState(
    Array(9).fill(null).map(() => Array(9).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [activeBoard, setActiveBoard] = useState(null);

  const colors = [
    "#f87171", // red-300
    "#4ade80", // green-300
    "#60a5fa", // blue-300
    "#facc15", // yellow-300
    "#f9a8d4", // pink-300
    "#a78bfa", // purple-300
    "#fb923c", // orange-300
    "#14b8a6", // teal-300
    "#22d3ee", // cyan-300
  ];

  const resetGame = () => {
    setBoard(Array(9).fill(null).map(() => Array(9).fill(null)));
    setWinner(null);
    setActiveBoard(null);
    setCurrentPlayer("X");
  };

  const checkWinner = (smallBoard) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let pattern of patterns) {
      const [a, b, c] = pattern;
      if (smallBoard[a] && smallBoard[a] === smallBoard[b] && smallBoard[a] === smallBoard[c]) {
        return smallBoard[a];
      }
    }
    return null;
  };

  const handleClick = (outIndex, inIndex) => {
    if (
      board[outIndex][inIndex] ||
      winner ||
      (activeBoard !== null && activeBoard !== outIndex)
    ) return;

    const newBoard = board.map(sb => [...sb]);
    newBoard[outIndex][inIndex] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard[outIndex]);
    if (result) {
      setWinner(result);
      setTimeout(() => alert("Winner is " + result), 150);
      resetGame();
      return;
    }

    if (newBoard.flat().flat().every(cell => cell !== null)) {
      setTimeout(() => alert("Draw"), 150);
      resetGame();
      return;
    }

    setActiveBoard(inIndex); // highlight next inner board
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div className="w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] flex justify-center items-center bg-amber-100 p-3 sm:p-5 md:p-7">
      <div className="w-[min(92vw,calc(100vh-3.5rem-3rem))] sm:w-[min(85vw,calc(100vh-4rem-4rem))] aspect-square bg-slate-900 grid grid-cols-3 grid-rows-3 gap-1 sm:gap-2 p-1 sm:p-2 rounded-2xl shadow-2xl border border-slate-950">
        {board.map((smallBoard, outIndex) => {
          const isActive = activeBoard === null || activeBoard === outIndex; // allow first move anywhere
          return (
            <div
              key={outIndex}
              className={`grid grid-cols-3 grid-rows-3 aspect-square w-full h-full border border-black/25 rounded-lg relative overflow-hidden transition-all duration-200 ${
                isActive ? "opacity-100 z-10 shadow-lg scale-[1.02]" : "opacity-40 pointer-events-none"
              }`}
              style={{
                backgroundColor: colors[outIndex],
              }}
            >
              {smallBoard.map((value, inIndex) => (
                <div
                  key={inIndex}
                  className="w-full h-full aspect-square border border-black/15 flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-2xl font-black cursor-pointer select-none focus:outline-none active:bg-black/5 transition-colors"
                  style={{ color: value === "X" ? "red" : value === "O" ? "blue" : "black" }}
                  onClick={() => handleClick(outIndex, inIndex)}
                >
                  {value}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
