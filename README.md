## To run locally:

```yarn run dev```

#### On another terminal...

```yarn hardhat node```

### Built with
NextJs, Typescript, ethers, web3modal and deployed to ipfs with fleek!

https://ethwalletapp.on.fleek.co/

Contract deployed on sepolia testnet - [0x0597071313ae58624FFbbDAB8643aD96E27eD3bc](https://sepolia.etherscan.io/address/0x0597071313ae58624ffbbdab8643ad96e27ed3bc)

### Lesson 3: Functions and Modifiers in Solidity

**Objective:** To understand how to write and use functions in Solidity, and to learn about function modifiers for enforcing certain conditions and managing access control in smart contracts.

#### Part 1: Functions in Solidity

- **Function Declaration and Types**:
    
    - Understand the syntax for declaring functions.
    - Different types of functions: `public`, `private`, `internal`, and `external`.
- **Return Values and Visibility**:
    
    - How to define return values for functions.
    - Understand the implications of function visibility.
- **Function Modifiers**:
    
    - Usage of `view`, `pure`, and state-changing functions.
- **Function Parameters**:
    
    - Passing parameters to functions.
    - Using `memory` and `storage` keywords for complex data types.
- **Example: Creating a Function**
    
    solidityCopy code
    
    `pragma solidity ^0.8.0;  contract MyContract {     uint public count = 0;      function increment() public {         count += 1;     }      function getCount() public view returns (uint) {         return count;     } }`
    

#### Part 2: Modifiers in Solidity

- **Understanding Modifiers**:
    
    - Purpose of modifiers in Solidity.
    - Writing custom modifiers to enforce conditions.
- **Common Use Cases**:
    
    - Restricting access to certain functions.
    - Validating inputs or conditions before executing function logic.
- **Example: Using a Modifier**
    
    solidityCopy code
    
    `pragma solidity ^0.8.0;  contract MyContract {     address public owner;      constructor() {         owner = msg.sender;     }      modifier onlyOwner() {         require(msg.sender == owner, "Not the owner");         _;     }      function changeOwner(address newOwner) public onlyOwner {         owner = newOwner;     } }`
    

#### Assignments and Practical Exercises

**Assignment 1**:

- Research and write a brief explanation of how and why `view` and `pure` modifiers are used in Solidity functions.



**Exercise 1**:

- Create a smart contract with a few functions demonstrating different visibility levels (`public`, `private`, `internal`, `external`) and return values.

**Exercise 2**:

- Write a contract that includes a custom modifier. Use this modifier to restrict access to one of the contract's functions.

For this exercise I built a simple EthWallet contract. I made sure I used the built in modifiers specified in the brief, as well as a couple of custom modifiers.

---

This lesson will help you understand how to structure the logic within your smart contracts using functions and modifiers. These are key concepts in Solidity and are essential for writing secure and efficient smart contracts. Once you've completed this lesson, you'll have a deeper understanding of how to control access and enforce specific logic flows in your smart contracts.
