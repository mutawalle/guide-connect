import clsx from 'clsx'
import React, { InputHTMLAttributes, ComponentProps } from 'react'

type As<Props = any> = React.ElementType<Props>

type PropsWithAs<Props = unknown, Type extends As = As> = Props &
  Omit<ComponentProps<Type>, "as" | keyof Props> & {
    as?: Type
  }

type TextboxProps = {
    className?: string
    label?: string
}


function Textbox({className, label, as: Component = "input", ...props}: PropsWithAs<TextboxProps, "input">) {
    return (
      <>
        {
          label &&
          <h4 className='w-full mb-1 text-slate-500'>{label}</h4>
        }
        <Component className={clsx(className, "w-full px-2 py-2 border-[1px] rounded-md border-slate-300 text-slate-700 outline-none")} {...props}/>
      </>
    )
}

export default Textbox