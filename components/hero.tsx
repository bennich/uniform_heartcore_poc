import { IntentTags } from '@uniformdev/optimize-common'
import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react";

// export interface HeroProps{
//     heros: HeroFields[];
// }

export interface HeroFields {
        headline: string;
        heroSubtitle: string;
        /** Type of list item. Type is only required when component generation using Personalize component */
        type?: string | null;
        /** Intent tag associated with this list item. Items without intent tags will be considered default. */
        intentTag: IntentTags | undefined | null;
}

    export const Hero = ({headline, heroSubtitle, intentTag}:HeroFields) => {
        ///console.log(intentTag);
        useBehaviorTracking(intentTag);

        return (
            <>
            <div>
                <h1 className="title">{headline}</h1>
            </div>
            <p className="description">
                {heroSubtitle}
            </p>
            </>
        )}

        export default Hero