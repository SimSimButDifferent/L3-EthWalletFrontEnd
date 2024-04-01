## To run locally:

`yarn run dev`

#### On another terminal...

`yarn hardhat node`

### Built with

NextJs, Typescript, ethers, web3modal and deployed to ipfs with fleek!

https://ethwalletapp.on.fleek.co/

## Deployments

ZkSync - [0xc3290b06957b9A75AA1EF4a99307DFB72faE6B01](https://explorer.zksync.io/address/0xc3290b06957b9A75AA1EF4a99307DFB72faE6B01)

ZkSync testnet - [0x0729ABD1CD5d7BfE08F2d8Ce87c4C2cDD5FC7656](https://sepolia.explorer.zksync.io/address/0x0729ABD1CD5d7BfE08F2d8Ce87c4C2cDD5FC7656)

Base - [0xddfEcC36670F8F3f875587f37E4982527E9410C4](https://basescan.org/address/0xddfecc36670f8f3f875587f37e4982527e9410c4)

Base Sepolia - [0xddfEcC36670F8F3f875587f37E4982527E9410C4](https://basescan.org/address/0xddfecc36670f8f3f875587f37e4982527e9410c4)

Sepolia testnet - [0xA5cAC1cC06D664A2E778C0192BAb6D2ebf989719](https://sepolia.basescan.org/address/0xa5cac1cc06d664a2e778c0192bab6d2ebf989719)

![image](https://github.com/SimSimButDifferent/L3-EthWalletFrontEnd/assets/88177427/f888da39-3fe4-45ab-b067-ab120c51024b)

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
