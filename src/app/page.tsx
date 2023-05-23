"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import RememberPI from "@/components/rememberPi";

export default function Home() {
	const [toggleInfo, setToggleInfo] = useState(false);

	return (
		<div className="w-full h-full">
			<div className="top-0 left-0 w-full h-20 absolute z-10">
				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.9 }}
					className={`inline-block align-middle ${
						toggleInfo ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
					} rounded-full`}
					// className="inline-block align-middle"
					onHoverStart={() => setToggleInfo(true)}
					onHoverEnd={() => setToggleInfo(false)}
					onClick={() => setToggleInfo(!toggleInfo)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-info-circle"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
					</svg>
				</motion.button>
			</div>
			<div
				className={`top-0 left-0 w-[35vw] h-[35vh] absolute ${
					toggleInfo ? "block" : "hidden"
				}`}
			>
				<div className="inline-block align-middle">
					<div className="bg-lime-200 rounded-sm p-4 w-[48rem]">
						<p className="text-gray-800">
							Remember PI? is a game where you have to remember the digits of
							PI.
						</p>
						<p className="text-gray-800">
							First, enter the first 3 digits of PI. Then, enter 4 digits of PI.
							Then, enter 5 digits of PI. And so on.
						</p>
						<p className="text-gray-800">
							The game will keep track of how many digits you have entered
							correctly.
						</p>
					</div>
				</div>
			</div>
			<RememberPI />
		</div>
	);
}
