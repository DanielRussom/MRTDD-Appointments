describe('Appointment', () => {
    it('renders the customer first name', () => {
        expect(document.body.textContent).toMatch('Ashley');
    });
});