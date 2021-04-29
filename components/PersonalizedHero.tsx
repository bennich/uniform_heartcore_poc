import { Personalize } from '@uniformdev/optimize-tracker-react';
import { Hero, HeroFields } from "./hero";

export const PersonalizedHeroLoading = () => {
  return <h1>Loading......</h1>
}

export const PersonalizedHero = ( {item}: {item: HeroFields[]} ) => {
  return (
    <Personalize variations={item} component={Hero} matchFilter='personalizedOrDefault'/>
  //    <Personalize variations={item} component={Hero} matchFilter='personalizedOrDefault'>
  //       {({ personalized, components }) => (
  //    <>
  //      {/* `personalized` - Indicates if personalization occurred. */}
  //      <h1>
  //        {personalized
  //          ? 'Personalization happened'
  //          : 'Personalization did not happen; default variation shown'}
  //     </h1>

  //      {/* `components` - An array of React components that have been constructed from the personalized list and `component` or `componentMapping` mapping. These can be rendered any way you see fit. If no component mapping exists, this is undefined. */}
  //      <div>Rendered variation: {components}</div>

  //    </>
  //  )}
  //      </Personalize>
  )
}