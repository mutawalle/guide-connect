import clsx from 'clsx'
import { ReactNode, ButtonHTMLAttributes, ComponentProps } from 'react'

type As<Props = any> = React.ElementType<Props>

type PropsWithAs<Props = unknown, Type extends As = As> = Props &
  Omit<ComponentProps<Type>, "as" | keyof Props> & {
    as?: Type
}

type ButtonProps = {
    color: "primary" | "transparent"
    children: ReactNode
    className?: string
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type" | "className" | "children" | "disabled">


function Button({ as: Component = "button", color, className, children, ...props }: PropsWithAs<ButtonProps, "button">) {
  return (
    <Component 
        className={clsx(className, "block rounded-md px-4 py-2",
            color == "primary" && "text-white bg-sky-600 hover:bg-sky-500",
            color == "transparent" && "text-sky-600 border border-sky-300 hover:border-sky-500 hover:text-sky-500")}
        {...props}
    >{children}</Component>
  )
}

export default Button