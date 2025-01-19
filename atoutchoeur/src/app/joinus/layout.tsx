
import joinUsWrapper from '../components/css/joinus/JoinUsWrapper.module.css'
import { NavLink } from '../components/ui/navlink';

export default function JoinUsLayout({
    children, }: {
        children: React.ReactNode;
    }) {
    return (
        <>
            <div className={joinUsWrapper.joinUsWrapper}>
                <ul>
                    <li><NavLink href='/joinus/' variant='startVertical' height='largeHeight' width='mediumWidth'>Informations</NavLink></li>
                    <li><NavLink href='/joinus/proposal' variant='vertical' height='largeHeight' width='mediumWidth'>Les avantages!</NavLink></li>
                    <li><NavLink href='/joinus/cost' variant='endVertical' height='largeHeight' width='mediumWidth'>Tarifs</NavLink></li>
                </ul>
                <div>{children}</div>
            </div>
            
        </>
    )
}

