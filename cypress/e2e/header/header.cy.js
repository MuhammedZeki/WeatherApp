import { MemoryRouter } from "react-router-dom"
import Header from "../../../src/_components/header/Header"

describe('HeaderComponents', () => {
    beforeEach(() => {
        mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )
    })
    it("Link home page gidiyor mu ", () => {
        cy.get("[data-cy=linkToHome]").should("exist").click()
        cy.url().should("eq", "/")
    })
})