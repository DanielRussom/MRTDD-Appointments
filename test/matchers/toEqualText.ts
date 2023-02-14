import {
    matcherHint,
    printExpected,
    printReceived,
} from "jest-matcher-utils";

export const toEqualText = (
    element: { textContent: string; },
    expectedText: string
) => {
    const pass = element.textContent === expectedText;

    const sourceHint = () =>
        matcherHint(
            "toEqualText",
            "element",
            printExpected(expectedText),
            { isNot: pass }
        );
    const actualTextHint = () => 
        "Actual text: " + printReceived(element.textContent);

    const message = () => [sourceHint(), actualTextHint()].join("\n\n");
    
    return { pass, message };
};