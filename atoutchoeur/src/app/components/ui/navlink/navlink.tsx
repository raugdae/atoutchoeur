import {ComponentProps, forwardRef} from 'react'
import style from './NavLink.module.css'
import Link from 'next/link';


interface LinkProps extends ComponentProps<typeof Link> {
    variant?: 'vertical' | 'horizontal' | 'startVertical' | 'endVertical'| 'startHorizontal' | 'endHorizontal' ,
    height?: 'smallHeight' | 'mediumHeight' | 'largeHeight',
    width?: 'smallWidth' | 'mediumWidth' | 'largeWidth',
}


const NavLink = forwardRef<HTMLAnchorElement,LinkProps>(({
    children,
    className = '',
    variant = '',
    height='smallwidth',
    width='smallwidth',
    ...props
}
    , ref) => {
        const buttonClasses = [
            style.navmenu,
            style[variant],
            className,
            style[height],
            style[width]
        
        ].filter(Boolean).join(' ').trim()

        return (
            <Link
                className={buttonClasses}
                ref={ref}
                {...props}
                >{children}
                </Link>
        )
    }
)
NavLink.displayName = 'NavLink'

export {NavLink}
