import { createStandaloneToast } from '@chakra-ui/toast';

type ToastContentType = {
  title?: string;
  message: string;
};

type NOTIFY_TYPE = 'success' | 'error' | 'warning' | 'info';

const { toast } = createStandaloneToast();

const addToast = (
  type: NOTIFY_TYPE,
  content: ToastContentType,
  bg?: string,
) => {
  toast({
    title: content.title,
    description: content.message,
    status: type,
    duration: 5000,
    isClosable: true,
    position: 'top-right',
    variant: 'damn',
    containerStyle: {
      borderRadius: '16px',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '14px',
      backgroundColor: bg,
      color: '#222325',
    },
  });
};

export const toastError = (content: ToastContentType): void => {
  return addToast('error', content, '#FF4C3F');
};

export const toastSuccess = (content: ToastContentType): void => {
  return addToast('success', content, '#4EEA1F');
};

export const toastInfo = (content: ToastContentType): void => {
  return addToast('info', content);
};

export const toastWarning = (content: ToastContentType): void => {
  return addToast('warning', content);
};
