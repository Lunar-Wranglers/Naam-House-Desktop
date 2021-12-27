import apply from '../images/ApplyIcon.png'
import applyLive from '../images/ApplyLive.png'
import contact from '../images/ContactIcon.png'
import contactLive from '../images/ContactLive.png'
import home from '../images/HomeIcon.jpg'
import homeLive from '../images/HomeLive.png'
import info from '../images/InfoIcon.png'
import infoLive from '../images/InfoLive.png'
import profile from '../images/ProfileIcon.png'
import profileLive from '../images/ProfileLive.png'

const icons = [
  {
    id: 1,
    text: 'home',
    dead: `${home}`,
    live: `${homeLive}`,
    url: '/'
  },
  {
    id: 2,
    text: 'info',
    dead: `${info}`,
    live: `${infoLive}`,
    url: '/info'
  },
  {
    id: 3,
    text: 'apply',
    dead: `${apply}`,
    live: `${applyLive}`,
    url: '/apply'
  },
  {
    id: 4,
    text: 'contact',
    dead: `${contact}`,
    live: `${contactLive}`,
    url: '/contact'
  },
  {
    id: 5,
    text: 'profile',
    dead: `${profile}`,
    live: `${profileLive}`,
    url: '/profile'
  },
]

export default icons 