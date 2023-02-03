import { html, fixture, expect } from '@open-wc/testing';
import  Sinon , { stub } from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

const el = await fixture(html`<loanemi-details></loanemi-details>`);

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

  xit('Checking for _data', async () => {
    expect(el._data).to.be.equal('');
  });

  it('should render title', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  it('spy _toBasicDetails function called', async () => {
    const spy = Sinon.spy(el, '_toBasicDetails');
    el._toBasicDetails();
    expect(spy.calledOnce).to.be.true;
  });
  it('spy _toCustomer function called', async () => {
    const spy = Sinon.spy(el, '_toCustomer');
    el._toCustomer();
    expect(spy.calledOnce).to.be.true;
  });
});
