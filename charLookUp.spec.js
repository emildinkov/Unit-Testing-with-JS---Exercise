import { lookupChar } from "./charLookUp.js";
import { expect } from "chai";

describe("lookupChar", () => {
    it("should return undefined when passed incorrect firstParam with the correct second Param", () => {
        // Arrange
        const firstParam = 10;
        const secondParam = 10;
        // Act
        const result = lookupChar(firstParam, secondParam);
        // Assert
        expect(result).to.be.undefined;
    });

    it("should return undefined when passed correct firstParam with incorrect secondParam", () => {
        // Arrange
        const firstParam = "something";
        const secondParam = "123"
        // Act
        const result = lookupChar(firstParam, secondParam);
        // Assert
        expect(result).to.be.undefined;
    });

    it("should return Incorrect index when first and second param is correct, but index is bigger than length of string", () => {
        // Arrange
        const text = "some text";
        const index = 50;
        // Act
        const result = lookupChar(text, index);
        // Assert
        expect(result).to.be.equal("Incorrect index");
    });

    it("should return correct result when both inputs are correct", () => {
        // Arrange
        const text = "something";
        const index = 1;
        // Act
        const result = lookupChar(text, index);
        // Assert
        expect(result).to.be.equal("o");
    });

    it("should return undefined when index is floating number", () => {
        // Arrange
        const text = "something";
        const index = 1.5;
        // Act
        const result = lookupChar(text, index);
        // Assert
        expect(result).to.be.undefined;
    });

    it("should return Incorrect index when passed negative number", () => {
        // Arrange
        const text = "something";
        const negativeNumber = -1;
        // Act
        const result = lookupChar(text, negativeNumber);
        // Assert
        expect(result).to.be.equal("Incorrect index");
    });

});