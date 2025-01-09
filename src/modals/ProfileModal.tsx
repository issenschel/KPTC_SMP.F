import { ReactNode } from "react";
import { useOverlay } from "../store/overlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Props {
	title: string,
	children?: ReactNode
}

export default function ProfileModal({ title, children }: Props) {
	const setIsClose = useOverlay(state => state.setClose);
	return (
		<section className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[28rem] bg-white rounded-3xl p-8"
		onClick={e => e.stopPropagation()}>
			<button className="absolute top-2 right-2 px-2 py-1 text-red-700 font-bold border-none hover:bg-slate-100"
					onClick={setIsClose}>
				<FontAwesomeIcon icon={faXmark} className="text-2xl"/>
			</button>
			<header className="flex justify-center">
                <h3 className="text-2xl mb-6">{title}</h3>
            </header>
			<main className="text-center text-sm">{children}</main>
		</section>
	);
}
