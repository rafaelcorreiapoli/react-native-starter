import { Actions } from 'react-native-router-flux';
const menuItems = [
  {
    label: 'Pizza\'s',
    icon: 'md-pizza',
    action: 'restaurantes',
    sceneKey: 'restaurantes'
  },
  {
    label: 'Beer\'s',
    icon: 'md-beer',
    action: 'counter',
    sceneKey: 'counter'
  },
  {
    label: 'Alarm',
    icon: 'md-alarm',
    action: 'welcome',
    sceneKey: 'welcome'
  }
]

export default menuItems;
