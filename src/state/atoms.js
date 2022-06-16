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
    'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTI5NjJ8MHwxfHNlYXJjaHwxMHx8YmVhY2h8ZW58MHx8fHwxNjU1MTg5Njkx&ixlib=rb-1.2.1&q=80&w=1080',
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
