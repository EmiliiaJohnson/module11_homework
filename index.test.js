import {getMonth} from "./index.js";

describe("test for months", () => {
    const july = 7;
    const october = 10;
    it("expected output - июль", () => {
        expect(getMonth(july)).toBe('июль');
    }),
        it("expected output - октябрь", () => {
            expect(getMonth(october)).toBe('октябрь');
        }),
        it("expected output - неизвестно", () => {
            expect(getMonth(0)).toBe('неизвестно');
        });
});

describe("tests for definePrime function", () => {
    const january = 1;
    const december = 12;
    it("expected correct output", () => {
        expect(getMonth(january)).not.toBe('октябрь');
        expect(getMonth(december)).toBe('декабрь');
        expect(getMonth('')).toBe('неизвестно');
    });
});