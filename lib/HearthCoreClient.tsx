import {Client} from '@umbraco/headless-client'

const HeartcoreClient = new Client({
  projectAlias: 'uniheart',
  apiKey: 'nYRLelg71n7YKCYIUXHq',
  language: 'en-US', // can be overwritten per method
  preview: false // true/false if the preview API should be used
})

export default HeartcoreClient