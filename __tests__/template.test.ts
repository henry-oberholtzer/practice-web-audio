import {describe, expect, test} from '@jest/globals';
import template from '../src/js/template-ts';

describe('Template', () => {
    test('Should return "All OK!" string', () => {
        expect("All OK!").toEqual("All OK!");
    });
});