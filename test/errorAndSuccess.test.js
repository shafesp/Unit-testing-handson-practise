import { html, fixture, expect } from '@open-wc/testing';
import  Sinon , { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

const el = await fixture(html `<loan-success></loan-success>`);
const el1 = await fixture(html `<loan-error></loan-error>`);

beforeEach(function(){
  Sinon.restore();
});


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

  it('should render title', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  it('spy _toHome function called', async () => {
    const spy = Sinon.spy(el, '_toHome');
    el._toHome();
    expect(spy.calledOnce).to.be.true;
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

  it('should render title', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  it('spy _toHome function called', async () => {
    const spy = Sinon.spy(el, '_toHome');
    el._toHome();
    expect(spy.calledOnce).to.be.true;
  });
});
