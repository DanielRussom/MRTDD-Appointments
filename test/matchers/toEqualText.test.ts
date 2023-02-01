import { toEqualText } from "./toEqualText";

describe("toEqualText matcher", () => {
    it('returns pass is true when text is the same as the content in a given element', () => {
        const element = {
            textContent: "text to find"
        };

        const result = toEqualText(
            element,
            "text to find"
        );

        expect(result.pass).toBe(true);
    });

    it('returns pass is false when text is not the same as the content in a given element', () => {
        const element = {
            textContent: "text to find"
        };

        const result = toEqualText(
            element,
            "other text to find"
        );

        expect(result.pass).toBe(false);
    });
})