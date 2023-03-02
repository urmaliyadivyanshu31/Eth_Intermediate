const hre = require("hardhat");

async function main() {
    await hre.run("compile")

    const Event = await hre.ethers.getContractFactory("Event")
    const event = await Event.deploy()

    const transactionResponse = await event.store(1)
    const transactionReceipt = await transactionResponse.wait()
    // console.log(transactionReceipt)
    console.log(transactionReceipt.events[0].args.oldNumber.toString())
    console.log(transactionReceipt.events[0].args.newNumber.toString())
    console.log(transactionReceipt.events[0].args.addedNumber.toString())
    console.log(transactionReceipt.events[0].args.sender)
    console.log(transactionReceipt.events)
    console.log(event.address)

    await event.deployed()
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    }
);