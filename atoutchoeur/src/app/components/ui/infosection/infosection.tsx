import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import Image from 'next/image'

import Style from './InfoSection.module.css'



interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'nopic' | 'picLeft' | 'picRight'
    hasPicture?: boolean
    picPath?: string

}

const InfoSection = forwardRef<HTMLDivElement, SectionProps>(({
    children,
    className,
    hasPicture = true,
    variant = 'nopic',
    picPath = '',
    ...props
}, ref) => {
    const divClasses = [
        Style.base,
        className
    ].filter(Boolean).join(' ').trim()


    return (


        <div className={divClasses}
            ref={ref}
            {...props}>



            {hasPicture && variant === 'picLeft' && (

                <div className={Style.image}><Image src={picPath} alt='Section Image' fill className='object-cover' /></div>

            )}
            <div className={Style.childStyle}>{children}</div>
            {hasPicture && variant === 'picRight' && (

                <div className={Style.image}><Image src={picPath} alt='Section Image' fill className='object-cover' /></div>

            )}

        </div>
    )
}

)
InfoSection.displayName = 'InfoSection'

export { InfoSection }