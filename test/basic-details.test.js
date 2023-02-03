import { html, fixture, expect } from '@open-wc/testing';
import  Sinon , { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html `<basic-details></basic-details>`);

describe('Basic details', () => {
  // Write test cases inside this block
  after(function(){
    // console.log("-----After the test suit-----")
  });
  before(function(){
    // console.log("-----Before the test suit-----")
  });
  beforeEach(function(){
    // console.log("-----Before Each the test suit-----")
  });
  afterEach(function(){
    // console.log("-----After Each the test suit-----")
  });

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

  it('should render title', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  it('spy _numToWord function called', async () => {
    const spy = Sinon.spy(el, '_numToWord');
    el._numToWord();
    expect(spy.calledOnce).to.be.true;
  });

  it('spy _captureDetails function called', async () => {
    const spy = Sinon.spy(el, '_captureDetails');
    el._captureDetails();
    expect(spy.calledOnce).to.be.true;
  });

  it('spy _toDashboard function called', async () => {
    const spy = Sinon.spy(el, '_toDashboard');
    el._toDashboard();
    expect(spy.calledOnce).to.be.true;
  });
});
