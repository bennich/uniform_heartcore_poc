import {Home} from "../components/home"
import PageFooter from "../components/footer"
import {PersonalizedHero} from "../components/PersonalizedHero"
import { GetStaticProps } from "next"
import MyClient from "../lib/HearthCoreClient"
import { HeroFields } from "../components/hero"
import { translateIntentTag } from "../lib/utils";


export default function index(props) {
    return (    
      <>
        <PersonalizedHero item={props.components}  />
        <Home />
        <PageFooter />
      </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const frontPage = await MyClient.delivery.content.byId('957ae98c-c720-4530-9edd-68ff5e9cdbb1')
    const variant = frontPage.heroVariants as any[];

  const components = variant.map<HeroFields>(child => 
      (
         {
           headline: child.heroTitle,
           heroSubtitle: child.heroSubtitle,
           intentTag: translateIntentTag(child.personalization),
         }
      )
    )

    return {
    props: {
       components: components
    }
  }
}