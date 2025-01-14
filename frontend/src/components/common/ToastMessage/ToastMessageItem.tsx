import Image from "next/image";

import IconButton from "@/components/common/Button/IconButton";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";
import { type ToastMessageProps } from "@/types/toastMessage";

const ToastMessageItem = ({ id, message, type }: ToastMessageProps) => {
	const { removeToastMessage } = useToastMessageContext();

	const baseStyles = "flex items-center justify-between w-full p-4 shadow-lg rounded-xl animate-slideIn";

	const typeStyles = {
		error: "bg-error-500 text-white",
		success: "bg-success-500 text-white",
		info: "bg-info-500 text-white",
	};

	return (
		<div role="toastMessage" className={`${baseStyles} ${typeStyles[type]}`}>
			<span className="text-body font-medium pr-4">{message}</span>
			<IconButton
				icon={<Image src="/icons/file.svg" alt="close" width={24} height={24} />}
				label="alarm close"
				color="white"
				onClick={() => removeToastMessage(id)}
				className="hover:bg-black-200"
			/>
		</div>
	);
};

export default ToastMessageItem;
