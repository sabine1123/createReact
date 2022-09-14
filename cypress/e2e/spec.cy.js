describe("My First Test", () => {
    it("visit localhost", () => {
        cy.visit("http://localhost:3000/");
    });
    it("click url", () => {
        cy.contains("Learn React").click();
    });
    // it("get app text", () => {
    //     cy.get(".App").then(($App) => {
    //         const appText = $App.text(); // 可以在 then 裡面 const/let
    //         expect(appText).is.eql("Employee List");
    //     });
    // });
});
