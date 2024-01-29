import { mathEnforcer } from "./mathEnforcer.js";
import { expect } from "chai";

describe("mathEnforcer", () => {

    describe("addFive", () => {

        it("should return undefined when passed parameter is not a number", () => {
            // Arrange
            const inputText = "text";
            const inputNull = null;
            const inputUndefined = undefined;
            // Act
            const textResult = mathEnforcer.addFive(inputText);
            const nullResult = mathEnforcer.addFive(inputNull);
            const undefinedResult = mathEnforcer.addFive(inputUndefined);
            // Assert
            expect(textResult).to.be.undefined;
            expect(nullResult).to.be.undefined;
            expect(undefinedResult).to.be.undefined;
        });

        it("should return correct result when passed negative number", () => {
            // Arrange
            const input = -5;
            // Act
            const result = mathEnforcer.addFive(input);
            // Assert
            expect(result).to.be.equal(0);
        });

        it("should return correct result when passed floating point number", () => {
            // Arrange
            const input = 5.10;
            // Act
            const result = mathEnforcer.addFive(input);
            // Assert
            expect(result).to.be.equal(10.10);
        });

        it("should return correct result when passed floating point number with CloseTo", () => {
            // Arrange
            const input = 5.100000;
            // Act
            const result = mathEnforcer.addFive(input);
            // Assert
            expect(result).to.be.closeTo(10.10, 0.01);
        });
    });
    describe("subtractTen", () => {
        it("should return undefined when passed parameter is not a number", () => {
            // Arrange
            const inputText = "text";
            const inputNull = null;
            const inputUndefined = undefined;
            // Act
            const textResult = mathEnforcer.subtractTen(inputText);
            const nullResult = mathEnforcer.subtractTen(inputNull);
            const undefinedResult = mathEnforcer.subtractTen(inputUndefined);
            // Assert
            expect(textResult).to.be.undefined;
            expect(nullResult).to.be.undefined;
            expect(undefinedResult).to.be.undefined;
        });

        it("should return correct result when passed negative number", () => {
            // Arrange
            const input = -10;
            // Act
            const result = mathEnforcer.subtractTen(input);
            // Assert
            expect(result).to.be.equal(-20);
        });

        it("should return correct result when passed floating point number", () => {
            // Arrange
            const input = 20.50;
            // Act
            const result = mathEnforcer.subtractTen(input);
            // Assert
            expect(result).to.be.equal(10.50);
        });

        it("should return correct result when passed floating point number with CloseTo", () => {
            // Arrange
            const input = 20.50000;
            // Act
            const result = mathEnforcer.subtractTen(input);
            // Assert
            expect(result).to.be.closeTo(10.50, 0.01);
        });
    });
    describe("sum", () => {

        it("should return undefined when the first param is not a number", () => {
            // Arrange
            const firstParam = "text";
            const secondParam = 10;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.undefined;
        });

        it("should return undefined when the second param is not a number", () => {
            // Arrange
            const firstParam = 10;
            const secondParam = "text";
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.undefined;
        });

        it("should return undefined when both params is not a numbers", () => {
            // Arrange
            const firstParam = "text";
            const secondParam = "nothing";
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.undefined;
        });

        it("should return correct result when both params is a numbers", () => {
            // Arrange
            const firstParam = 100;
            const secondParam = 50;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.equal(150);
        });

        it("should return correct result when both params is a negative numbers", () => {
            // Arrange
            const firstParam = -10;
            const secondParam = -10;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.equal(-20);
        });

        it("should return correct result when first param is a negative number", () => {
            // Arrange
            const firstParam = -10;
            const secondParam = 10;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.equal(0);
        });

        it("should return correct result when second param is a negative number", () => {
            // Arrange
            const firstParam = 10;
            const secondParam = -10;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.equal(0);
        });

        it("should return correct result when both params is a floating numbers", () => {
            // Arrange
            const firstParam = 5.50;
            const secondParam = 5.30;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.equal(10.80);
        });

        it("should return correct result when first param is a floating number", () => {
            // Arrange
            const firstParam = 5.50;
            const secondParam = 10;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.equal(15.50);
        });

        it("should return correct result when second param is a floating number", () => {
            // Arrange
            const firstParam = 0;
            const secondParam = 2.50;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.equal(2.50);
        });

        it("should return correct result when both params is a floating numbers with closeTo", () => {
            // Arrange
            const firstParam = 5.200;
            const secondParam = 5.200;
            // Act
            const result = mathEnforcer.sum(firstParam, secondParam);
            // Assert
            expect(result).to.be.closeTo(10.40, 0.01);
        });
    });
});