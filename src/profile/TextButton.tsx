interface Props {
    text: string,
    onPress: () => void
}

export default function TextButton({text, onPress}: Props) {
	return (
		<button className="p-0 border-none text-sm text-[#4A88FC] transition duration-100 hover:text-[#79BBFF] focus:outline-none" onClick={onPress}>
			{text}
		</button>
	);
}
