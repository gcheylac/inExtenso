const {
    getText,
    controlCheckAll
} = require("../js/listFunction.js");

describe("getText -  Obtient de text en fonction  du nombre", () => {
    test("nombre divisible par 3", () => {
        const text = getText(3);
        expect(text).toBe("fizz");
    });
    test("nombre divisible par 5", () => {
        const text = getText(5);
        expect(text).toBe("buzz");
    });
    test("nombre divisible par 3 et 5", () => {
        const text = getText(15);
        expect(text).toBe("fizzbuzz");
    });
    test("nombre non divisible par 3 et 5", () => {
        const text = getText(8);
        expect(text).toBe("8");
    });
});

describe("controlCheckAll - controle si la checkbox doit être cocher", () => {
    test("Cocher", () => {
        const listCheckBox = [
            {id: 1, label: "checkBox1", value: true},
            {id: 2, label: "checkBox2", value: true},
            {id: 3, label: "checkBox3", value: true},
            {id: 4, label: "checkBox4", value: true},
            {id: 5, label: "checkBox5", value: true}
        ];
        const text = controlCheckAll(listCheckBox);
        expect(text).toBe(true);
    });
    test("Pas cocher", () => {
        const listCheckBox = [
            {id: 1, label: "checkBox1", value: false},
            {id: 2, label: "checkBox2", value: true},
            {id: 3, label: "checkBox3", value: true},
            {id: 4, label: "checkBox4", value: true},
            {id: 5, label: "checkBox5", value: true}
        ];
        const text = controlCheckAll(listCheckBox);
        expect(text).toBe(false);
    });
});
