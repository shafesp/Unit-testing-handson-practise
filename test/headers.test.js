import { html, fixture, expect } from '@open-wc/testing';
import  Sinon , { stub } from 'sinon';
import '../src/header/Header.js';
import { Header } from '../src/header/Header.js';
var myObj = new Header();

const el = await fixture(html `<loan-header></loan-header>`);
const button = el.shadowRoot.querySelectorAll('button');

describe('loan-header', () => {
  // Write test cases inside this block
  it('can instantiate an element', async () => {
    const el = await fixture('<div class="container"><header></div>');
    expect(el.getAttribute('class')).to.equal('container');
  });

  it('can semantically compare full dom trees', async () => {
    const el = await fixture(`<div class="container"><header></header></div>`);
    expect(el).dom.to.equal('<div class="container"><header></header></div>');
  });

  it('can semantically compare lightDom trees', async () => {
    const el = await fixture(`<div class="container"><header></header></div>`);
    expect(el).lightDom.to.equal('<header></header>');
  });

  xit('can compare against a snapshot', async () => {
    const el = await fixture(`<div class="container"><header></div>`);
    await expect(el).lightDom.to.equalSnapshot();
  });

  it('can check for an exiting css class', async () => {
    const el = await fixture(`<div class="container"><header></div>`);
    expect(el).to.have.class('container');
  });
  
  it('works', async () => {
    expect(el).to.be.accessible();
  });

  xit('spy localeChanged function called', async () => {
    var e = Sinon.spy();
    myObj.localeChanged(e);
    expect(e.localeChanged).to.be.true;
  })

  it('spy localeChanged function called', async () => {
    const spy = Sinon.spy(el, "localeChanged");
    button[0].click();
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });
});
