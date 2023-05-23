"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const RememberPI = () => {
	const [digitsToRememberNext, setDigitsToRememberNext] = useState<number>(3);

	const [digitsEntered, setDigitsEntered] = useState<string>("");
	const [digitsEnteredCorrectly, setDigitsEnteredCorrectly] =
		useState<boolean>(false);
	const [showDigitsEnteredCorrectly, setShowDigitsEnteredCorrectly] =
		useState<boolean>(false);

	const [digitsEnteredCorrectlyCount, setDigitsEnteredCorrectlyCount] =
		useState<number>(0);

	const [showNumberToRemember, setShowNumberToRemember] =
		useState<boolean>(false);

	const [gameOver, setGameOver] = useState<boolean>(false);

	const [pi, setPi] = useState<string>("");

	const [bestScore, setBestScore] = useState<number>(0);
	const [newBestScore, setNewBestScore] = useState<boolean>(false);

	useEffect(() => {
		fetch(
			"https://api.pi.delivery/v1/pi?start=0&numberOfDigits=1000&format=plain"
		)
			// response is an object with the following properties: "content"
			.then(
				// get the object from the response, and setpi to the value of "content"
				(response) => response.json()
			)
			.then((response) => setPi(response.content));
		// if best score is not set, set it to 0. Otherwise, set it to the value in local storage
		if (!localStorage.getItem("bestScore")) {
			localStorage.setItem("bestScore", "0");
		} else {
			setBestScore(parseInt(localStorage.getItem("bestScore") || "0", 10));
		}
	}, []);

	const handleBestScore = () => {
		if (digitsEnteredCorrectlyCount > bestScore) {
			setBestScore(digitsEnteredCorrectlyCount);
			setNewBestScore(true);
			localStorage.setItem("bestScore", digitsEnteredCorrectlyCount.toString());
		}
	};

	function handleShowNumberToRemember() {
		setShowNumberToRemember(true);
		setShowDigitsEnteredCorrectly(true);
	}

	function handleRestartClick() {
		setDigitsToRememberNext(3);
		setDigitsEntered("");
		setDigitsEnteredCorrectly(false);
		setDigitsEnteredCorrectlyCount(0);
		setShowNumberToRemember(false);
		setShowDigitsEnteredCorrectly(false);
		setGameOver(false);
		setNewBestScore(false);
	}

	const handleNumberClick = (number: number) => {
		setDigitsEntered(digitsEntered + number);
	};

	function handleGameOver() {
		setGameOver(true);
		setShowDigitsEnteredCorrectly(false);
		handleBestScore();
		// wait three seconds and call handleRestartClick
		setTimeout(() => {
			handleRestartClick();
		}, 3000);
	}

	async function handleEnterClick() {
		if (digitsEntered === pi.slice(0, digitsToRememberNext)) {
			setDigitsEnteredCorrectly(true);
			if (digitsEnteredCorrectlyCount === 0) {
				setDigitsEnteredCorrectlyCount(3);
			} else {
				setDigitsEnteredCorrectlyCount(digitsEnteredCorrectlyCount + 1);
			}
			setDigitsToRememberNext(digitsToRememberNext + 1);
			setDigitsEntered("");
			handleShowNumberToRemember();
		} else {
			handleGameOver();
			// setGameOver(true);
		}
	}

	useEffect(() => {
		if (digitsEntered.length === digitsToRememberNext) {
			handleEnterClick();
		} else if (digitsEntered !== pi.slice(0, digitsEntered.length)) {
			handleGameOver();
		}
	}, [
		digitsEntered,
		digitsToRememberNext,
		handleEnterClick,
		handleGameOver,
		pi,
	]);

	function handleNextLevel() {
		setShowNumberToRemember(false);
		setShowDigitsEnteredCorrectly(false);
	}

	return (
		<div className="flex flex-col items-center w-full h-full">
			{/* title */}
			<div className="flex flex-row justify-center text-4xl font-bold bg-green-500 border-2 border-white p-2 m-2">
				Remember PI?
			</div>
			<div className="flex flex-col items-center w-100 border-2 border-white p-2">
				{/* best score */}
				{newBestScore && (
					<AnimatePresence initial={false} mode="wait" key="bestScore">
						<motion.div
							className="flex flex-row justify-center text-2xl font-bold bg-green-500 border-2 border-white p-2"
							key="bestScoreInner"
							animate={{
								scale: [1, 1.5, 1, 1],
								rotate: [0, 0, 270, 0],
								borderRadius: ["0%", "10%", "20%", "0%"],
							}}
							transition={{
								duration: 1,
								times: [0, 0.2, 0.8, 1],
								loop: 1,
								ease: "easeInOut",
							}}
						>
							New Best Score!
						</motion.div>
					</AnimatePresence>
				)}
				<div className="text-2xl font-bold">Best Score: {bestScore}</div>
				<div className="text-2xl font-bold">
					{showDigitsEnteredCorrectly && digitsEnteredCorrectly && (
						<motion.div
							className="flex flex-row justify-center text-2xl font-bold bg-green-500 border-2 border-white p-2"
							variants={{
								hidden: {
									opacity: 0,
									scale: 0,
								},
								middle: {
									opacity: 1,
									scale: 1.5,
								},
								visible: {
									opacity: 1,
									scale: 1,
								},
							}}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{
								duration: 0.3,
								times: [0, 0.2, 1],
								ease: "easeInOut",
							}}
						>
							Correct!
						</motion.div>
					)}

					{showNumberToRemember && (
						<div className="text-2xl font-bold bg-amber-500 border-2 border-white p-2">
							<h1>Now Memorize {digitsToRememberNext} Digits:</h1>
							<div className="flex flex-row justify-center">
								<span className="text-2xl font-bold">
									{pi.slice(0, digitsToRememberNext - 1)}
								</span>
								<span className="text-2xl font-bold bg-green-300 text-black rounded">
									{pi.slice(digitsToRememberNext - 1, digitsToRememberNext)}
								</span>
							</div>
							<div className="flex flex-row justify-center">
								<button
									onClick={handleNextLevel}
									className="bg-green-500 hover:bg-gray-700 text-zinc-100 font-bold py-2 px-4 rounded my-2 text-base"
								>
									Next Level
								</button>
							</div>
						</div>
					)}
				</div>
				{/* make digits entered appear like a typing machine */}
				<motion.div
					key={digitsEntered}
					className={
						!gameOver && !showDigitsEnteredCorrectly
							? "text-2xl font-bold text-green-500"
							: "text-4xl font-bold text-red-500"
					}
					// className="text-2xl font-bold text-green-300"
					initial={{
						opacity: 0,
						scale: 1.2,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.1 }}
				>
					{digitsEntered}
					{!gameOver && !showDigitsEnteredCorrectly && (
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ repeat: Infinity, duration: 0.5 }}
						>
							_
						</motion.span>
					)}
				</motion.div>
				<div className="text-2xl font-bold">
					You Remembered: {digitsEnteredCorrectlyCount}
				</div>
				{gameOver && (
					<div className="text-2xl font-bold bg-red-500 text-white p-2">
						{"Game Over! Try Again"}
					</div>
				)}
				<div className="flex flex-row">
					<motion.button
						onClick={handleRestartClick}
						className="bg-red-500 hover:bg-red-600 text-zinc-100 font-bold py-2 px-4 rounded my-2"
						whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
						whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
					>
						Restart
					</motion.button>
				</div>
				{!showNumberToRemember && !gameOver && (
					<div className="grid grid-cols-3 gap-4 justify-center  p-2 rounded-sm border-2 border-white">
						<motion.button
							onClick={() => handleNumberClick(1)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-amber-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							1
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(2)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							2
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(3)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-lime-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							3
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(4)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							4
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(5)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-purple-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							5
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(6)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-yellow-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							6
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(7)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-pink-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							7
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(8)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-indigo-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							8
						</motion.button>
						<motion.button
							onClick={() => handleNumberClick(9)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							9
						</motion.button>
						{/* 0 should be in the middle of the grid */}
						<motion.button
							onClick={() => handleNumberClick(0)}
							disabled={showNumberToRemember}
							className="h-16 px-8 m-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg col-span-3"
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
						>
							0
						</motion.button>
					</div>
				)}
			</div>
		</div>
	);
};

export default RememberPI;
