import { useAddress, useMarketplace} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ListingCard from "./listingcard";

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const marketplace = useMarketplace("0x625a01af713d530222Fd4dED0A50c785c5Ec3Fc3");
    const address = useAddress(); 

    useEffect(() => {
        getListings();  
    }, [])

    const getListings = async () => {
        try {
            if (!address) return; 
            const list = await marketplace.getActiveListings();
            console.log(list);
            setListings(list);
            setLoading(false);  
        } catch (err) {
            console.log(err)
        }
    }
    return <div>
        {loading ? <div>Loading...</div> : <div>
            {listings.length > 0 ? listings.map(listing => 
                <ListingCard name={listing.asset.name} 
                    description={listing.asset.description} 
                    image={listing.asset.image} 
                    price={listing.buyoutPrice} 
                    id={listing.id} 
                    key={listing.id}/>) : (
                <div>No Listings as of now!</div>
            )}
        </div>}
    </div>;
}

export default Listings; 