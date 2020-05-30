const assert = require('assert');

const waitUntilConfig = (timeoutMsg = 'expected text to be different after 5s') => ({
    timeout: 5000,
    timeoutMsg
});

describe('Home page', () => {
    beforeEach(()=>{
        browser.url('/');
    });

    it('should have the right title', () => {
        expect(browser.getTitle()).toBe('GoodData Homework');
    });
});

describe('Home page Signed In', () => {
    beforeEach(()=>{
        browser.url('/account.html');
        const emailInput = $('input[type=email]');
        emailInput.setValue("j.draslar@gmail.com");
        const passwordInput = $('input[type=password]');
        passwordInput.setValue("123456Aa");
        const buttonSignIn = $('.submit-button');
        buttonSignIn.click();
    });

    it('charts', () => {
        const highChartsContainer = $('div.highcharts-container');
        expect(highChartsContainer).toBeDefined();
        let label = $('g.highcharts-data-labels g text tspan');
        browser.waitUntil(()=>label.getText()==="$1,693,630", waitUntilConfig());

        const select = $('select');
        select.selectByIndex(4);

        const isLoading = $('.s-loading');
        expect(isLoading).toBeDefined();

        browser.waitUntil(()=>$('g.highcharts-data-labels g text tspan').getText()==="$1,731,823", waitUntilConfig(label.getText()))
    });
});