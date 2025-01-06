import { ReactNode } from "react"

interface Props {
    itemTitle: string,
    subTitle?: string
    endItem?: ReactNode,
}

export default function InfoBlockItem({itemTitle, subTitle, endItem}: Props) {
  return (
    <div className="flex justify-between items-center mb-2 py-4">
        <div>
            <h4 className="text-[#6b707b]">{itemTitle}</h4>
            {subTitle && <p className="text-[#3c3f44] mt-1 mr-3">{subTitle}</p>}
        </div>
        {endItem && <p className="text-[#3c3f44]">{endItem}</p>}
    </div>
  )
}
