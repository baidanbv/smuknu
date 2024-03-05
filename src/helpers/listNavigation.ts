interface NavigationItem {
  id: number;
  navName: string;
  url: string;
}
export const listNavigation: NavigationItem[] = [
  {
    id: 1,
    navName: 'FORSIDEN',
    url: '/smuknu'
  },
  {
    id: 2,
    navName: 'VORES PRODUKTER',
    url: '/smuknu/shop'
  },
  {
    id: 3,
    navName: 'SPØRG OM SUNDHED',
    url: '/smuknu/sundhed'
  },
  {
    id: 4,
    navName: 'BLIV MEDLEM',
    url: '/smuknu/be-member'
  }
];
