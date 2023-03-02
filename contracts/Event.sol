// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Event {
    uint256 public favouriteNumber;
    event storedNumber(
        uint256 indexed oldNumber,
        uint256 indexed newNumber,
        uint256 addedNumber,
        address sender
    );


    function store(uint256 newFavouriteNumber) public {

        emit storedNumber(
            favouriteNumber,
            newFavouriteNumber,
            newFavouriteNumber + favouriteNumber,
            msg.sender
        );

        favouriteNumber = newFavouriteNumber;
            } 
}