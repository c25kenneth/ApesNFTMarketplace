import {Text, Box, HStack, Image, VStack, Button} from "@chakra-ui/react"
import { useMarketplace } from "@thirdweb-dev/react"
import { isCompositeComponent } from "react-dom/test-utils";

const ListingCard = ({ name, price, id, description, image}) => {

    const marketplace = useMarketplace("0x625a01af713d530222Fd4dED0A50c785c5Ec3Fc3");

    const buyAsset = async () => {
        try {
            await marketplace.buyoutListing(id, 1); 
        } catch(err) {
            console.log(err); 
        }
    }
    return <div>
        <VStack>
            <Box w={400} h={800} marginBottom={'32'}>
                <Image w={300} h={500} src={image} alt='NFT Image'/>
                <Text paddingTop={'16'}>{name}</Text>
                <Text>{description}</Text>
                <Text>{price / 1e18} Ethereum</Text>
                <Button onClick={buyAsset}>Buy NFT! 🔥</Button>
            </Box>
        </VStack>
    </div>
}

export default ListingCard; 