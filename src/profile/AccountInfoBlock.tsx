interface Props {
    title: string,
    LinkButton?: any,
    children?: any,
    style?: string
}
export default function AccountInfoBlock({title, LinkButton, children, style}: Props) {
    return (
        <section className={`flex-1 rounded-2xl pt-2 px-5 bg-white border border-[#e7e8ee] ${style}`}>
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="py-4">{title}</h3>
                    {LinkButton}
                </div>
                <hr className="-mx-5 my-2" />
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}
