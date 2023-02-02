import { toEqualText } from "./toEqualText";

const stripTerminalColor = (text) =>
    text.replace(/\x1B\[\d+m/g, "");


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

    it('returns a message that contains the source line if text is not equal', () => {
        const element = {
            textContent: "text to find"
        };

        const result = toEqualText(
            element,
            "other text to find"
        );

        expect(stripTerminalColor(result.message())).toContain(`expect(element).toEqualText("other text to find")`)
    });

    it('returns a message that contains the source line if text is not equal', () => {
        const element = {
            textContent: "text to find"
        };

        const result = toEqualText(
            element,
            "other text to find"
        );

        expect(stripTerminalColor(result.message())).toContain(`expect(element).toEqualText("other text to find")`)
    });

    it('returns a message that contains the source line if negated match', () => {
        const element = {
            textContent: "text to find"
        };

        const result = toEqualText(
            element,
            "text to find"
        );

        expect(stripTerminalColor(result.message())).toContain(`expect(element).not.toEqualText("text to find")`)
    });
})