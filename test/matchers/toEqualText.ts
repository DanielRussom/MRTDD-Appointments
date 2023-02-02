import {
    matcherHint,
    printExpected
} from "jest-matcher-utils";

export const toEqualText = (
    element: { textContent: string; },
    expectedText: string
) => {
    const pass = element.textContent === expectedText;

    const message = () =>
        matcherHint(
            "toEqualText",
            "element",
            printExpected(expectedText),
            { isNot: pass }
        );

    return { pass, message };
};