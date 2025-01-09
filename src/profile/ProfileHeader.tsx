import { Link } from "react-router-dom"

export default function ProfileHeader({nickname = 'Loading...'}) {
    return (
        <header className="flex justify-between items-center px-10 h-[70px] bg-white">
            <Link to='/'>
                <img src="" alt="KPTC_SMP_LOGO" />
            </Link>
            <button>{nickname}</button>
        </header>
    )
}
