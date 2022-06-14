import { atom } from 'recoil';
export const userNameState = atom({
  key: 'username',
  default: 'User',
});
export const backgroundOpacityState = atom({
  key: 'backgroundOpacity',
  default: 0.6,
});
export const backgroundImgState = atom({
  key: 'backgroundImg',
  default:
    'https://images.unsplash.com/photo-1542332213-31f87348057f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
});
export const settingsModalOpen = atom({
  key: 'settingsModalOpen',
  default: false,
});
export const mailCounterState = atom({
  key: 'mailCounter',
  default: 0,
});
export const userCityState = atom({
  key: 'userCity',
  default: 'London',
});
export const websitesModalState = atom({
  key: 'websitesModalOpen',
  default: false,
});
export const isFirstTime = atom({
  key: 'fisrtTime',
  default: true,
});
