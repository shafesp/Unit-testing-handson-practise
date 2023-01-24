import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

const el = await fixture(html `<loan-success></loan-success>`);
const el1 = await fixture(html `<loan-error></loan-error>`);


describe('Success screen ', () => {
  // Write test cases inside this block
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
  
  it('works', async () => {
    expect(el).to.be.accessible();
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('can semantically compare full dom trees', async () => {
    const el1 = await fixture(`<div class="form-basic"><h2></h2></div>`);
    expect(el1).dom.to.equal('<div class="form-basic"><h2></h2></div>');
  });

  it('can semantically compare lightDom trees', async () => {
    const el1 = await fixture(`<div class="form-basic"><h2></h2></div>`);
    expect(el1).lightDom.to.equal('<h2></h2>');
  });

  xit('can compare against a snapshot', async () => {
    const el1 = await fixture(`<div class="form-basic"><h2></h2></div>`);
    await expect(el1).lightDom.to.equalSnapshot();
  });
  
  it('works', async () => {
    expect(el1).to.be.accessible();
  });
});
