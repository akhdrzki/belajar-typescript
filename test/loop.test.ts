describe("Loop", function () {
  it("should support for loop", function () {
    const names: string[] = ["Lalu", "Akhadi", "Rizki"];
    // for loop
    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    // for of
    for (const name of names) {
      console.info(name);
    }

    // for in
    for (const index in names) {
      console.info(names[index]);
    }
  });

  it("should support while loop", function () {
    let counter = 0;

    while (counter < 10) {
      counter++;
      console.info(counter);
    }
  });

  it("should support do while loop", function () {
    let counter = 0;
    do {
      counter++;
      console.info(counter);
    } while (counter < 5);
  });

  it("should support break and continue", function () {
    let counter = 0;
    do {
      counter++;
      if (counter == 20) {
        break;
      }
      if (counter % 2 == 0) {
        continue;
      }

      console.info(counter);
    } while (true);
  });
});
