## Note

For lesson 4 Code, switch to L4 branch 🌿

## Directions for use

To play around with this code locally run the following commands in your local terminal in order:

```
git clone https://github.com/SimSimButDifferent/L3-L4-EthWalletFrontEnd.git
cd L3-L4-EthWalletFrontEnd
yarn
yarn run dev
```

Then split the terminal and run the below code in the other half:

```
cd ..
git clone https://github.com/SimSimButDifferent/L3-L4-EthWallet.git
cd L3-L4-EthWallet
yarn
yarn hardhat node
```

Finally, in the L3-L4-Ethwallet folder, deploy to the hardhat node using:

```
yarn hardhat run scripts/deploy.js --network localhost
```

paste: 'localhost:3000' into you browser and you can run the app locally on your computer.



### Built with

NextJs, Typescript, ethers, web3modal and deployed to ipfs with fleek!

https://ethwalletapp.on.fleek.co/

Updated L4 Contract deployed on sepolia testnet - [0xAd2043E811Fd4FB67D2e6b063678F30627b313E3](https://sepolia.etherscan.io/address/0xAd2043E811Fd4FB67D2e6b063678F30627b313E3)

![image](https://github.com/SimSimButDifferent/L3-L4-EthWalletFrontEnd/assets/88177427/5de5c452-f619-461b-97d1-d4e2562e8df5)



## Follow along with the course below!

### Lesson 3: Functions and Modifiers in Solidity

**Objective:** To understand how to write and use functions in Solidity, and to learn about function modifiers for enforcing certain conditions and managing access control in smart contracts.

#### Part 1: Functions in Solidity

-   **Function Declaration and Types**:
    -   Understand the syntax for declaring functions.
    -   Different types of functions: `public`, `private`, `internal`, and `external`.
-   **Return Values and Visibility**:
    -   How to define return values for functions.
    -   Understand the implications of function visibility.
-   **Function Modifiers**:
    -   Usage of `view`, `pure`, and state-changing functions.
-   **Function Parameters**:
    -   Passing parameters to functions.
    -   Using `memory` and `storage` keywords for complex data types.
-   **Example: Creating a Function**
    solidityCopy code

    ```solidity
    pragma solidity ^0.8.0;

    contract MyContract {

        uint public count = 0;

        function increment() public {
            count += 1;
        }

        function getCount() public view returns (uint) {
            return count;
        }
    }
    ```

#### Part 2: Modifiers in Solidity

-   **Understanding Modifiers**:
    -   Purpose of modifiers in Solidity.
    -   Writing custom modifiers to enforce conditions.
-   **Common Use Cases**:
    -   Restricting access to certain functions.
    -   Validating inputs or conditions before executing function logic.
-   **Example: Using a Modifier**

    solidityCopy code

    ```solidity
    pragma solidity ^0.8.0;

    contract MyContract {

        address public owner;

        constructor() {
            owner = msg.sender;
        }

        modifier onlyOwner() {
            require(msg.sender == owner, "Not the owner");
        _;
        }

        function changeOwner(address newOwner) public onlyOwner {
            owner = newOwner;
        }
    }
    ```

#### Assignments and Practical Exercises

**Assignment 1**:

-   Research and write a brief explanation of how and why `view` and `pure` modifiers are used in Solidity functions.

**Exercise 1**:

-   Create a smart contract with a few functions demonstrating different visibility levels (`public`, `private`, `internal`, `external`) and return values.

**Exercise 2**:

-   Write a contract that includes a custom modifier. Use this modifier to restrict access to one of the contract's functions.

For this exercise I built a simple EthWallet contract. I made sure I used the built in modifiers specified in the brief, as well as a couple of custom modifiers.

---

This lesson will help you understand how to structure the logic within your smart contracts using functions and modifiers. These are key concepts in Solidity and are essential for writing secure and efficient smart contracts. Once you've completed this lesson, you'll have a deeper understanding of how to control access and enforce specific logic flows in your smart contracts.
