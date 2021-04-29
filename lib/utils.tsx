import { IntentTags } from '@uniformdev/optimize-common';
import { HeroFields } from '../components/hero';
interface intentJson
{
  contentTypeAlias: string,
  unfrmOptIntentTag: string, 
  unfrmOptIntentTagStrenght: string
}

export function translateIntentTag(intenttag){
    var returnvalx
    var intentdata = intenttag[0] as intentJson
    
    
  if(intentdata.unfrmOptIntentTag){
    returnvalx=
    {
          intents: {
            [intentdata.unfrmOptIntentTag]: {
              str: intentdata.unfrmOptIntentTagStrenght
            }
          },
  }
}
  else
    {
      returnvalx=
      {
  
      }
    }

    return returnvalx as IntentTags
  }