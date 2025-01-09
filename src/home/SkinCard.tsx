interface Props {
    source: string,
    alt?: string,
    styles?: string
}
export default function SkinCard({source, alt, styles}: Props) {
	return (
		<div className="bg-[#383838]">
			<img
				className={`${styles}`}
				src={source}
				alt={alt}
			/>
		</div>
	);
}
