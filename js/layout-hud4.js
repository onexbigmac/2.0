import { parseSharedSlotsDynamic } from '/js/slotParser.js';

class LayoutHud4 extends HTMLElement {
  connectedCallback() {
    const $this = $(this);
    const { 
          colour, 
          title, 
          text, 
          img1Tag
    } = parseSharedSlotsDynamic($this);
      
      this.innerHTML = ``
      this.innerHTML = `
     
<div class="Hud animate__animated2 animate__delay-1s  animate__slower animate__backInLeft mb-4">
  <div class="HudInner">
    <div class="Top"><span>○ ○ ○</span> </div>
    <div style="" class="p-4">${text}
      <div class="blocks"></div>
      <div class="bar"></div>
      <div class="barR" ></div>
      <div class="barR"></div>
      <div class="progress-container" style="">
        <div class="progress-bar"></div>
      </div>
    </div>
    <div class="cardDetailRounded">
      <div class="cardDetailWave" style="background-attachment:initial"></div>
      <div class="cardDetailT"></div>
      <div class="cardDetailL"></div>
      <div class="cardDetailB"></div>
      <div class="cardDetailR"></div>
    </div>
  </div>
</div>

    `;
  }
}
customElements.define('layout-hud4', LayoutHud4);
