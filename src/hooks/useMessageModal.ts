import { useSetRecoilState } from 'recoil';
import { atomMessageModalInfo } from '@src/recoil/messageModal';

export const useMessageModal = () => {
  const setMessageModalInfo = useSetRecoilState(atomMessageModalInfo);

  const open = ({ message }: { message: string }) => {
    setMessageModalInfo({
      status: true,
      message,
    });
  };

  const close = () => {
    setMessageModalInfo({
      status: false,
      message: '',
    });
  };

  return {
    open,
    close,
  };
};
