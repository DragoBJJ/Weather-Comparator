import { ReactNode } from "react"

type TemplateProps = {
  children: ReactNode
}

export const WebAppTemplate = ({children}: TemplateProps
  ) => {
  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
        {children}
    </div>
  )
}