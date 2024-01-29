import { isOddOrEven } from "./isOddOrEven.js";
import { expect } from "chai";

describe("isOddOrEven", () => {

    it("should return undefined when passed input different from the string", () => {
        // Arrange
        const inputNumber = 5;
        const inputNull = null;
        const inputNan = NaN;
        // Act
        const resultNumber = isOddOrEven(inputNumber);
        const resultNull = isOddOrEven(inputNull);
        const resultNan = isOddOrEven(inputNan);
        // Assert
        expect(resultNumber).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultNan).to.be.undefined;
    });
    it("should return even when passed empty string", () => {
        // Arrange
        const input = "";
        // Act
        const result = isOddOrEven(input);
        // Assert
        expect(result).to.be.equal("even");
    });
    it("should return even when passed string with even length", () => {
        // Arrange
        const input = "1234";
        // Act
        const result = isOddOrEven(input);
        // Assert
        expect(result).to.be.equal("even");
    });
    it("should return odd when passed string with odd length", () => {
        // Arrange
        const input = "123";
        // Act
        const result = isOddOrEven(input);
        // Assert
        expect(result).to.be.equal("odd");
    });
    it("should return odd when passed zero as input", () => {
        // Arrange
        const input = "0";
        // Act
        const result = isOddOrEven(input);
        // Assert
        expect(result).to.be.equal("odd");
    });
    it("should return odd when passed multiple string with odd length", () => {
        // Arrange
        const input = "some string";
        // Act
        const result = isOddOrEven(input);
        // Assert
        expect(result).to.be.equal("odd");
    });
    
});