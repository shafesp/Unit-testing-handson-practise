import { html, fixture, expect } from '@open-wc/testing';
import  Sinon , { stub } from 'sinon';
import '../loan-application.js';

const el = await fixture(html`<loan-application></loan-application>`);

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

  it('Checking for title', async () => {
    expect(el.title).to.be.equal('Hey there');
  });
  it('Checking for counter', async () => {
    expect(el.counter).to.be.equal(5);
  });

  it('spy __increment function called', async () => {
    const spy = Sinon.spy(el, '__increment');
    el.__increment();
    expect(spy.calledOnce).to.be.true;
  });
});