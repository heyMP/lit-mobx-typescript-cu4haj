import { LitElement, html, css } from 'lit';
import { MobxReactionUpdate } from '@adobe/lit-mobx';
import { store } from './store';

export class MyElement extends MobxReactionUpdate(LitElement) {
  // any observables accessed in the render method will now trigger an update
  public render() {
    return html`
          Count is ${store.count}
          <br />
          <button @click=${() => store.increment()}>Add</button>
      `;
  }
}

customElements.define('my-element', MyElement);
