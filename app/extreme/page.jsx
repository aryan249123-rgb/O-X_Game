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
    <div className="flex justify-center items-center w-full h-screen bg-amber-100">
      <div className="w-[720px] h-[720px] bg-white grid grid-cols-3 gap-1">
        {board.map((smallBoard, outIndex) => {
          const isActive = activeBoard === null || activeBoard === outIndex; // allow first move anywhere
          return (
            <div
              key={outIndex}
              className={`grid grid-cols-3 border-2 border-black relative`}
              style={{
                backgroundColor: colors[outIndex],
                boxShadow: isActive ? "0 0 0 4px black inset" : "none",
              }}
            >
              {smallBoard.map((value, inIndex) => (
                <div
                  key={inIndex}
                  className="border-2 border-black w-20 h-20 flex items-center justify-center text-2xl font-bold cursor-pointer"
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
