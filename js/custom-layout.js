// Layout classes will be imported globally by loader, so just access them via window
// or import them directly here if you want explicit imports.

class CustomLayout extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type') || 'one';

    // Layout classes must be globally accessible
    const LayoutClass = window[`Layout${type.charAt(0).toUpperCase() + type.slice(1)}`];
    if (!LayoutClass) {
      this.innerHTML = `<p style="color:red;">Unknown layout type: ${type}</p>`;
      return;
    }

    // Pass this element as container to the layout class instance
    const layoutInstance = new LayoutClass(this);
    layoutInstance.render();
  }
}

customElements.define('custom-layout', CustomLayout);