"use client";
import { useState } from "react";

export default function Normal() {
  const [block, setBlock] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    if (block[index] != "") {
      return;
    }
    const newBlock = [...block];
    newBlock[index] = currentPlayer;
    setBlock(newBlock);

    const winner = checkWinner(newBlock);
    if (winner) {
      setTimeout(() => {
        alert("winner " + winner);
        setBlock(["", "", "", "", "", "", "", "", ""]);
        setCurrentPlayer("X");
      }, 100);
      return;
    }
    if (!newBlock.includes("")) {
      setTimeout(() => {
        alert("draw");
        setBlock(["", "", "", "", "", "", "", "", ""]);
        setCurrentPlayer("X");
      }, 100);
      return;
    }
    setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
  };
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (block) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (block[a] !== "" && block[a] === block[b] && block[a] === block[c]) {
        return block[a];
      }
    }
    return null;
  };

  return (
    <div className="bg-purple-200 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-full flex justify-center items-center p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-3 grid-rows-3 w-[min(92vw,calc(100vh-3.5rem-3rem))] h-[min(92vw,calc(100vh-3.5rem-3rem))] sm:w-[min(85vw,calc(100vh-4rem-4rem))] sm:h-[min(85vw,calc(100vh-4rem-4rem))] bg-black gap-[1px] p-[1px] rounded-2xl shadow-2xl overflow-hidden border border-black">
        {block.map((value, index) => {
          return (
            <div
              className="w-full h-full aspect-square bg-white flex justify-center items-center text-4xl sm:text-5xl md:text-6xl font-black text-black cursor-pointer select-none focus:outline-none active:bg-slate-100 transition-colors"
              key={index}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}