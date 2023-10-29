import React, { useState } from 'react';

type Props = {
	content: React.ReactNode;
	trigger: React.ReactNode;
};

const Menubar = ({ content, trigger }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};

	const handleContentClick = () => {
		setIsOpen(false);
	};

	const handleBlur = () => {
		setTimeout(() => {
			setIsOpen(false);
		}, 100);
	};

	return (
		<button
			className='relative flex justify-center items-center'
			onBlur={handleBlur}
		>
			<div
				className='cursor-pointer p-2 mx-3 w-8 h-12'
				onClick={handleTriggerClick}
			>
				{trigger}
			</div>
			<div
				className={`absolute ${isOpen ? 'block' : 'hidden'}`}
				onClick={handleContentClick}
			>
				{content}
			</div>
		</button>
	);
};

export default Menubar;
