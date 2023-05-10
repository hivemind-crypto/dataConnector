const { Network, Alchemy } = require('alchemy-sdk');

const settings = {
    apiKey: 'jlYpjoc9YP6-ML-HbRcmgdPLBHy5D4uR',
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const main = async () => {
    const ownerAddr = "vitalik.eth";
    console.log("fetching NFTs for address:", ownerAddr);
    console.log("...");

    const nftsForOwner = await alchemy.nft.getNftsForOwner("vitalik.eth");
    console.log("number of NFTs found:", nftsForOwner.totalCount);
    console.log("...");

    for (const nft of nftsForOwner.ownedNfts) {
        console.log("===");
        console.log("contract address:", nft.contract.address);
        console.log("token ID:", nft.tokenId);
    }
    console.log("===");

    console.log("fetching metadata for a Crypto Coven NFT...");
    const response = await alchemy.nft.getNftMetadata(
        "0x5180db8F5c931aaE63c74266b211F580155ecac8",
        "1590"
    );

    console.log("NFT name: ", response.title);
    console.log("token type: ", response.tokenType);
    console.log("tokenUri: ", response.tokenUri.gateway);
    console.log("image url: ", response.rawMetadata.image);
    console.log("time last updated: ", response.timeLastUpdated);
    console.log("===");
};

main().catch(console.error);


//alchemy.nft.getNftsForOwner('0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE').then(console.log);

//Vitalik's wallet
//alchemy.core.getTokenBalances("0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE").then(console.log);

//Beacon's wallet
alchemy.core.getTokenBalances("0x00000000219ab540356cBB839Cbe05303d7705Fa").then(console.log);
alchemy.core.getTokenMetadata('0x006c7a91ae21afcb558cb1035148a880e5407e9e').then(console.log);

//Vitalik's wallet
//alchemy.nft.getNftsForOwner('vitalik.eth').then(console.log);

//Beacon's wallet
//alchemy.nft.getNftsForOwner('0x00000000219ab540356cBB839Cbe05303d7705Fa').then(console.log);

//do not use, throws errors. exploration in progress for these endpoints
//alchemy.core.getTokenMetadata('0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE').then(console.log);
// alchemy.core.getBlockNumber().then(console.log);
// alchemy.core.estimateGas().then(console.log);

// alchemy.nft.getContractMetadata('').then(console.log);
//  alchemy.nft.getNftSales('').then(console.log);

// alchemy.nft.getMintedNfts('').then(console.log);


// alchemy.ws.on(
//     {
//         method: 'alchemy_pendingTransactions'
//     },
//     res => console.log(res)
// );
