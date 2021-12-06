import { html, TemplateResult } from 'lit';
import { customElement, LitElement } from 'lit/decorators.js';
import { observable, action } from 'mobx';
import { MobxLitElement } from '@adobe/lit-mobx';

// create a mobx observable
class Counter {
  @observable
  public count = 0;

  @action
  public increment() {
    this.count++;
  }
}

// create instance that can be shared across components
const counter = new Counter();

// create a new custom element, and use the base MobxLitElement class
// alternatively you can use the MobxReactionUpdate mixin, e.g. `class MyElement extends MobxReactionUpdate(LitElement)`
@customElement('my-element')
class MyElement extends MobxLitElement {
  private counter = counter;

  // any observables accessed in the render method will now trigger an update
  public render(): TemplateResult {
    return html`
            Count is ${this.counter.count}
            <br />
            <button @click=${this.incrementCount}>Add</button>
        `;
  }

  private incrementCount() {
    this.counter.increment();
  }
}
