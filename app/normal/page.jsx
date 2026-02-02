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
    <div className="bg-purple-200 min-h-screen w-full flex justify-center items-center">
      <div className="grid grid-cols-3 w-96 h-96 bg-amber-300">
        {block.map((value, index) => {
          return (
            <div
              className="w-32 h-32 bg-white border-2 border-black flex justify-center items-center text-3xl text-black cursor-pointer"
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