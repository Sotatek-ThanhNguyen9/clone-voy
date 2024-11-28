import { Flex } from '@chakra-ui/react';
import { useWeb3Auth } from '@web3auth/modal-react-hooks';
import { useEffect } from 'react';

import 'src/styles/pages/SignIn.scss';

const SignInPage: React.FC = () => {
  const { connect, isInitialized } = useWeb3Auth();

  useEffect(() => {
    console.log(isInitialized);
    isInitialized && connect();
  }, [isInitialized]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgColor="#020B20"
      className="container"
    ></Flex>
  );
};
export default SignInPage;
