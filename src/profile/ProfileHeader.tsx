export default function ProfileHeader({nickname = 'Loading...'}) {
    return (
        <header className="flex justify-between items-center px-10 h-[70px] bg-white">
            <img src="" alt="KPTC_SMP_LOGO" />
            <button>{nickname}</button>
        </header>
    )
}
