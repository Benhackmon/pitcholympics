import Divider from './Divider';

type Props = {
	children: React.ReactNode;
	isLast?: boolean;
	className?: string;
};

const MenuSection = ({ children, isLast = false, className = '' }: Props) => {
	return (
		<>
			<div className={`flex flex-col gap-2 p-4 ${className}`}>{children}</div>
			{!isLast && <Divider />}
		</>
	);
};

export default MenuSection;
