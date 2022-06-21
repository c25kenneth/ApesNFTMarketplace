import React from "react";
import { useAddress, useDisconnect} from "@thirdweb-dev/react";
import {Center, VStack, Text, Button} from '@chakra-ui/react'; 
import Listings from "./listings";

function Home () {

    const address = useAddress(); 
    const disconnect = useDisconnect(); 
    
    return (
        <div>
            <VStack alignItems={'center'}>
                <Button onClick={disconnect} alignSelf={'flex-end'} m={'15px'}>Log Out</Button>
                <Text fontWeight={'bold'} align={'center'} fontSize={{ base: '12px', md: '20px', lg: '28px' }}>Your Eth Address is: {address}</Text>
                <Text paddingTop={'64px'} fontWeight={'bold'} fontSize={'32'} bgClip='text' bgGradient='linear(to-r, pink.500, blue.500)'>Current Yuechen Bored Ape NFT Listings!</Text>
                <Listings/>
            </VStack>
        </div>
    );
}

export default Home; 