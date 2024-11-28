export const getResponseMsg = (code: string | number) => {
  switch (String(code)) {
    default:
    case '99':
      return {
        message: `An error occurred, please try again (${code}).`,
        id: 'error.api.unknown',
      };
  }
};
