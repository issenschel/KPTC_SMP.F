import { ReactNode } from "react"
import { useOverlay } from "../store/overlay"
import { createPortal } from "react-dom"

interface Props {
	children: ReactNode
}

export default function Overlay({ children }: Props) {
	const isShow = useOverlay(state => state.isOpen)
	const setClose = useOverlay(state => state.setClose)

	return (
		<>
			{ isShow && createPortal(
			<div className="flex fixed z-10 
				inset-0 h-full overflow-auto 
				bg-black/60" 
				onClick={setClose}>
				{ children }
			</div>, document.body )}
		</>
	)
}
