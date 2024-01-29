import { analyzeArray } from "./arrayAnalyzer.js";
import { expect } from "chai";

describe("analyzeArray", () => {

    it("should return undefined when passed input is not array of numbers", () => {
        // Arrange
        const inputText = "something";
        const inputNull = null;
        const inputUndefined = undefined;
        const inputNumbers = 123;
        // Act
        const resultText = analyzeArray(inputText);
        const resultNull = analyzeArray(inputNull);
        const resultUndefined = analyzeArray(inputUndefined);
        const resultNumbers = analyzeArray(inputNumbers);
        // Assert
        expect(resultText).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNumbers).to.be.undefined;
    });

    it("should return undefined when passed input is empty array", () => {
        // Arrange
        const inputArray = [];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.be.undefined;
    });

    it("should return correct result when passed input as array of numbers", () => {
        // Arrange
        const inputArray = [5, 10, 15, 20, 30];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 5, max: 30, length: 5});
    });

    it("should return correct result when passed input as array of only negative numbers", () => {
        // Arrange
        const inputArray = [-5, -10, -15, -20, -30];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: -30, max: -5, length: 5});
    });

    it("should return correct result when passed input as array of positive and negative numbers", () => {
        // Arrange
        const inputArray = [20, -10, 50, -20, -30];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: -30, max: 50, length: 5});
    });

    it("should return correct result when passed input is a single element array", () => {
        // Arrange
        const inputArray = [0];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 0, max: 0, length: 1});
    });

    it("should return correct result when passed input with is an array with equal elements", () => {
        // Arrange
        const inputArray = [1, 1, 1, 1, 1];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 1, max: 1, length: 5});
    });

    it("should return correct result when passed input as array of floating numbers", () => {
        // Arrange
        const inputArray = [5.10, 10.10, 15.0, 20.20, 30.10];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 5.10, max: 30.10, length: 5});
    });

    it("should handle zero as a valid input element", () => {
        // Arrange
        const inputArray = [0, 0, 0, 0, 0];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 0, max: 0, length: 5});
    });

    it("should return undefined when passed input contains non-number elements", () => {
        // Arrange
        const inputArray = [5, '10', 15, 20, 30];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.be.undefined;
    });

    it("should handle arrays with a mix of integer and floating-point numbers", () => {
        // Arrange
        const inputArray = [5, 10.5, 15, 20.75, 30];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 5, max: 30, length: 5});
    });

    it("should handle arrays with negative floating-point numbers", () => {
        // Arrange
        const inputArray = [-5.5, -10.75, -15.1, -20.25, -30.9];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: -30.9, max: -5.5, length: 5});
    });

    it("should handle arrays with duplicate elements", () => {
        // Arrange
        const inputArray = [5, 10, 15, 10, 30];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 5, max: 30, length: 5});
    });

    it("should return correct result when passed array with single element different from zero", () => {
        // Arrange
        const inputArray = [5];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({min: 5, max: 5, length: 1});
    });
});