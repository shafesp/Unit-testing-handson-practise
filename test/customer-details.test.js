import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

const el = await fixture(html `<customer-details></customer-details>`);

describe('customer details', () => {
  // Write test cases inside this block
  it('can instantiate an element', async () => {
    const el = await fixture('<div class="container"></div>');
    expect(el.getAttribute('class')).to.equal('container');
  });

  it('can semantically compare full dom trees', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    expect(el).dom.to.equal('<div class="container"><h2></h2></div>');
  });

  it('can semantically compare lightDom trees', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    expect(el).lightDom.to.equal('<h2></h2>');
  });

  xit('can compare against a snapshot', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    await expect(el).lightDom.to.equalSnapshot();
  });

  it('can check for an exiting css class', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    expect(el).to.have.class('container');
  });

  it('works', async () => {
    expect(el).to.be.accessible();
  });
});
