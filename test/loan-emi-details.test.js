import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

const el = await fixture(html `<loanemi-details></loanemi-details>`);

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('can instantiate an element', async () => {
    const el = await fixture('<div class="emi-details"><h2>EMI Details</h2></div>');
    expect(el.getAttribute('class')).to.equal('emi-details');
  });

  it('can semantically compare full dom trees', async () => {
    const el = await fixture(`<div class="emi-details"><h2>EMI Details</h2></div>`);
    expect(el).dom.to.equal('<div class="emi-details"><h2>EMI Details</h2></div>');
  });

  it('can semantically compare lightDom trees', async () => {
    const el = await fixture(`<div class="emi-details"><h2>EMI Details</h2></div>`);
    expect(el).lightDom.to.equal('<h2>EMI Details</h2>');
  });

  xit('can compare against a snapshot', async () => {
    const el = await fixture(`<div class="emi-details"><h2>EMI Details</h2></div>`);
    await expect(el).lightDom.to.equalSnapshot();
  });

  it('can check for an exiting css class', async () => {
    const el = await fixture(`<div class="emi-details"><h2>EMI Details</h2></div>`);
    expect(el).to.have.class('emi-details');
  });
  
  it('works', async () => {
    expect(el).to.be.accessible();
  });

  it('Checking for _data', async () => {
    expect(el._data).to.be.equal('');
  });
});
