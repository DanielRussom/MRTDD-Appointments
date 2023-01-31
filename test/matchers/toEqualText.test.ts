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
})