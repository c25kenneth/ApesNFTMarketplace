import { Button, Center, VStack, Text, Avatar, Box } from "@chakra-ui/react";
import { useAddress, useDisconnect, useMetamask, useWalletConnect } from "@thirdweb-dev/react";
import Home from './home'

function App() {
  const connectWithMetamask = useMetamask(); 
  const address = useAddress(); 
  const disconnect = useDisconnect(); 
  const connectWithWalletConnect = useWalletConnect(); 

  if (!address) {
    return (
      <div className="App">
          <VStack alignItems={'center'}>
            <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip={'text'} fontWeight={'bold'}>
              Yuechen Bored Apes NFT Marketplace!
            </Text>
            <Box>
              <Avatar marginTop={'32px'} size='4xl' name='logo' src={"/images/logotwo.png"}/>
            </Box>
            <Box>
              <Button onClick={connectWithMetamask} marginTop={'64px'}>Sign in with Metamask! 🦊</Button>
            </Box>
          </VStack>
  
      </div>
    );
  } else {
    return <Home/>
  }
  
}

export default App;
