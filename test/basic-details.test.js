import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html `<basic-details></basic-details>`);

describe('Basic details', () => {
  // Write test cases inside this block
  it('can instantiate an element', async () => {
    const el = await fixture('<div class="form-basic"></div>');
    expect(el.getAttribute('class')).to.equal('form-basic');
  });

  it('can semantically compare full dom trees', async () => {
    const el = await fixture(`<div class="form-basic"><h2></h2></div>`);
    expect(el).dom.to.equal('<div class="form-basic"><h2></h2></div>');
  });

  it('can semantically compare lightDom trees', async () => {
    const el = await fixture(`<div class="form-basic"><h2></h2></div>`);
    expect(el).lightDom.to.equal('<h2></h2>');
  });

  xit('can compare against a snapshot', async () => {
    const el = await fixture(`<div class="form-basic"><h2></h2></div>`);
    await expect(el).lightDom.to.equalSnapshot();
  });

  it('can check for an exiting css class', async () => {
    const el = await fixture(`<div class="form-basic"><h2></h2></div>`);
    expect(el).to.have.class('form-basic');
  });
  
  it('works', async () => {
    expect(el).to.be.accessible();
  });

  it('Checking for amount', async () => {
    expect(el.amount).to.be.equal(10000);
  });
  it('Checking for range', async () => {
    expect(el.range).to.be.equal(2);
  });
  it('Checking for emiCalc', async () => {
    expect(el.emiCalc).to.be.equal(0);
  });
  it('Checking for type', async () => {
    expect(el.type).to.be.null;
  });
});
