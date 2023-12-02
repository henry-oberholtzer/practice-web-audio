import template from "../src/js/template-js.js";

describe('Template', () => {
    test('Should return "All OK!" string', () => {
        expect(template()).toEqual("All OK!");
    });
});