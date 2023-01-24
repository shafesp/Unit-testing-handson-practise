import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

let el;

describe('LoanApplication', () => {
  // Write test cases inside this block

  it('can semantically compare full dom trees', async () => {
    const el = await fixture(`<div><dash-board></dash-board></div>`);
    expect(el).dom.to.equal('<div><dash-board></dash-board></div>');
  });

  it('can semantically compare lightDom trees', async () => {
    const el = await fixture(`<div><dash-board></dash-board></div>`);
    expect(el).lightDom.to.equal('<dash-board></dash-board>');
  });

  xit('can compare against a snapshot', async () => {
    const el = await fixture(`<div><dash-board></dash-board></div>`);
    await expect(el).lightDom.to.equalSnapshot();
  });
  
  it('works', async () => {
    expect(el).to.be.accessible();
  });

  
});