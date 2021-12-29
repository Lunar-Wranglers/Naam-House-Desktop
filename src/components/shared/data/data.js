import dataApply from '../images/dataApply.png'
import dataInfo from '../images/dataInfo.png'
import dataLocate from '../images/dataLocation.png'
import dataNH from '../images/dataNH.png'

const services = [
  {
    id: 1,
    title: 'WELCOME',
    icon: `${dataNH}`,
    name: 'welcome',
    blurb1: 'The NAAM House app helps you help homeless veterans.',
    blurb2: 'Here are a few ways...'
  },
  {
    id: 2,
    title: 'LOCATION',
    icon: `${dataLocate}`,
    name: 'location',
    blurb1: 'You can report the location of a homeless veterans directly to NAAM House.',
    blurb2: 'NAAM House can then establish contact and help get our veterans off the street.'
  },
  {
    id: 3,
    title: 'INFORMATION',
    icon: `${dataInfo}`,
    name: 'info',
    blurb1: 'You can help walk a veteran through the services NAAM House can offer on our info page.',
    blurb2: 'NAAM House ensures our veterans are heard, recognized, and helped.'
  },
  {
    id: 4,
    title: 'APPLY',
    icon: `${dataApply}`,
    name: 'apply',
    blurb1: 'You can help a homeless veteran submit an application for NAAM House on the apply page.',
    blurb2: 'NAAM House is founded, designed, and run by former veterans who can really understand other vets.'
  }
]

const info = [
  {
    
  }
]

export { 
  services,
  info
}