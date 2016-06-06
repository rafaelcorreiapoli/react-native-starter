import { Actions } from 'react-native-router-flux';
const menuItems = [
  {
    label: 'Restaurantes',
    icon: 'md-restaurant',
    action: 'restaurantes',
    sceneKey: 'restaurantes'
  },
  {
    label: 'Promoções',
    icon: 'md-star',
    action: 'promocoes',
    sceneKey: 'promocoes'
  },
  {
    label: 'Vouchers',
    icon: 'md-paper',
    action: 'vouchers',
    sceneKey: 'vouchers'
  },
  {
    label: 'Perfil',
    icon: 'md-contact',
    action: 'perfil',
    sceneKey: 'perfil'
  },
  {
    label: 'Sair',
    icon: 'md-exit',
    action: 'profile',
    sceneKey: 'profile'
  }
]

export default menuItems;
