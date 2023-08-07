const { ethers, JsonRpcProvider } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(`YOUR MAINNET KEY`);

const querryBlockchain = async()=> {
  // const block = await provider.getBlockNumber();
  // console.log("Current Block Number",block);

  const balance = await provider.getBalance("0x00da6965bEBfb49F6066f45562B406E39fbeA8A1");
  const balanceEther = ethers.utils.formatEther(balance);
  console.log("Account Balance is :",balanceEther);
  
};

querryBlockchain();
