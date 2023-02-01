import {
    matcherHint,
    printExpected
} from "jest-matcher-utils";

export const toEqualText = (
    element,
    expectedText
) => {
    const pass = element.textContent === expectedText;

    const message = () =>
        matcherHint(
            "toEqualText",
            "element",
            printExpected(expectedText),
            {}
        );

    return { pass, message };
};