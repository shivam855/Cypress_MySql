import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('Start to type your Given step herea', () => {	
    cy.visit('https://google.com/');
});