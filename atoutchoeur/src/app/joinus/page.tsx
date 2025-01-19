import { InfoSection } from "@/app/components/ui/infosection";
import Link from 'next/link'


export default function JoinUs() {

    return (<InfoSection hasPicture picPath="/assets/photo_choeur.jpg" variant='picRight'>
    <p>
    <h1>Recrutement: </h1>
    Nous sommes toujours à la recherches de nos futurs membres. Principalement dans les registres des voix d&apos;hommes.</p>
    
    <p>
    <h1>Interessé à nous rejoindre?</h1>
    Retrouvez tout les moyen pour prendre contact avec nous dans la section <Link href='/contact'>Nous contacter</Link></p>
    
        

        
    </InfoSection>    
)

}