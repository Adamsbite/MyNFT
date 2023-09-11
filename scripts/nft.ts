import { ethers } from "hardhat";

async function main() {
  const biteNft = await ethers.deployContract("BiteNft");
  await biteNft.waitForDeployment();
  //console.log(factory);
  console.log(`factory deployed to ${biteNft.target}`);

  const _to = "0xebe326aCb888EE82e19Cb2Bf14E7573Fb732C263"

   const _tokenId = 0

   const _uri = "Qmf2Y7QL7zUeuzxNUVFpegmuPw4gxiUpm9xknHVQzSAyka"

  await biteNft.mint(_to, _tokenId, _uri);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
