const orangeTree = require("./03_orange_tree");

describe("Orange Tree should grow", () => {
  test("should be 1 years old and measure 25cm", () => {
    const tree = {age: 0, height: 0};
    orangeTree.grow(tree);
    expect(tree.height).toBe(25);
  });

  test("should measure 250 cm at 10 years old", () => {
    const tree = {age: 0, height: 0};
    for (let i = 0; i < 10; i++) {
      orangeTree.grow(tree);
    }
    expect(tree.height).toBe(250);
  });

  test("should measure 260 cm at 11 years old", () => {
    const tree = {age: 11, height: 250};
    orangeTree.grow(tree);
    expect(tree.height).toBe(260);
  });

  test("should measure 350 cm at 20 years old", () => {
    const tree = {age: 0, height: 0};
    for (let i = 0; i < 20; i++) {
      orangeTree.grow(tree);
      tree.age += 1;
    }
    expect(tree.height).toBe(350);
  });

  test("should age 1 year each year", () => {
    orangeTree.orangeTree.ageOneYear();
    expect(orangeTree.orangeTree.age).toBe(1);
  });

  test("should age 3 year after 3 years", () => {
    for (let i = 0; i < 2; i++) {
      orangeTree.orangeTree.ageOneYear();
    }
    expect(orangeTree.orangeTree.age).toBe(3);
  });
});

describe("Orange Tree should produces oranges", () => {

  test("should produce 0 orange at 4 years old", () => {
    const tree = {age: 4, oranges: 0};

    orangeTree.produceOranges(tree);
    expect(tree.oranges).toBe(0);
  });

  test("should produce 10 oranges at 5 years old", () => {
    const tree = {age: 5, oranges: 0};

    orangeTree.produceOranges(tree);
    expect(tree.oranges).toBe(10);
  });

  test("should produce 10 oranges at 9 years old", () => {
    const tree = {age: 9, oranges: 0};

    orangeTree.produceOranges(tree);
    expect(tree.oranges).toBe(10);
  });

  test("should produce 10 oranges in 2 years before 10 years old", () => {
    const tree = {age: 8, oranges: 0};

    orangeTree.produceOranges(tree);
    tree.age = 9;
    orangeTree.produceOranges(tree);
    expect(tree.oranges).toBe(10);
  });

  test("should produce 20 oranges at 10 years old", () => {
    const tree = {age: 10, oranges: 0};

    orangeTree.produceOranges(tree);
    expect(tree.oranges).toBe(20);
  });

  test("should produce 5 oranges at 20 years old", () => {
    const tree = {age: 20, oranges: 0};

    orangeTree.produceOranges(tree);
    expect(tree.oranges).toBe(5);
  });

  test("should produce 5 oranges at 20 years old", () => {
    const tree = {age: 40, oranges: 0};

    orangeTree.produceOranges(tree);
    expect(tree.oranges).toBe(0);
  });
});


describe("Should die or not die", () => {
  test("should die if tree is more than 100 years old", () => {
    const randomAge = (Math.ceil(Math.random()*100)+100);
    const tree = {age: randomAge, alive: true};
    orangeTree.mightDie(tree);
    expect(tree.alive).toBeFalsy();
  });

  test("should be alive if tree is 49 years old", () => {
    const tree = {age: 49, alive: true};
    orangeTree.mightDie(tree);
    expect(tree.alive).toBeTruthy();
  });

  test("should die between 50 & 100 years randomly", () => {
    orangeTree.orangeTree.age = 50;

    while (orangeTree.orangeTree.alive === true && orangeTree.orangeTree.age <= 100 && orangeTree.orangeTree.age >= 50) {
      orangeTree.orangeTree.ageOneYear();
    }

    expect(orangeTree.orangeTree.age).toBeGreaterThan(50);
    expect(orangeTree.orangeTree.age).toBeLessThan(101);
    expect(orangeTree.orangeTree.alive).toBeFalsy();

  });

});


describe("Should be seed", () => {
  test("should init values when seed action", () => {
    orangeTree.orangeTree.seed();
    expect(orangeTree.orangeTree.alive).toBeTruthy();
    expect(orangeTree.orangeTree.age).toBe(0);
    expect(orangeTree.orangeTree.height).toBe(0);
    expect(orangeTree.orangeTree.oranges).toBe(0);
  });

});


describe("Should pick an orange", () => {
  test("should pick an orange", () => {
    orangeTree.orangeTree.oranges = 10;
    expect(orangeTree.orangeTree.pickAnOrange()).toBeTruthy();
    expect(orangeTree.orangeTree.oranges).toBe(9);
  });
  test("should not pick an orange", () => {
    orangeTree.orangeTree.oranges = 0;
    expect(orangeTree.orangeTree.pickAnOrange()).toBeFalsy();
  });
});
