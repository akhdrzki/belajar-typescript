import { sayHello } from "../src/say-hello";

describe("If statement", function () {
  it("should support in typescript", function () {
    const examValue = 60;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Bad");
    }
  });

  it("should support ternary operator", function () {
    const value = 74;

    const say = value >= 75 ? "Congrats" : "Try again";
    console.info(say);
  });

  it("should support switch case", function () {
    function mathCalc(calc: string, value1: number, value2: number): number {
      let result = 0;
      switch (calc) {
        case "+":
          return (result += value1 + value2);

        case "-":
          return (result += value1 - value2);

        case "*":
          return (result += value1 * value2);
      }
    }

    console.info(mathCalc("*", 2, 3));
    expect(mathCalc("+", 2, 3)).toBe(5);
  });
});
