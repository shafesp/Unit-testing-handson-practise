import { html, fixture, expect } from '@open-wc/testing';
import  Sinon , { stub } from 'sinon';
import '../src/header/Header.js';

const el = await fixture(html `<loan-header></loan-header>`);

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
});
