import { atom } from 'recoil';

interface ModalInfo {
  status: boolean;
  message: string;
}

export const atomMessageModalInfo = atom<ModalInfo>({
  key: 'atomMessageModalInfo',
  default: {
    status: false,
    message: '',
  },
});
