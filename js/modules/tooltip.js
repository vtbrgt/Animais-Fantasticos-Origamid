export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
  
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this)
    
    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)
  
    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave)
  }
  
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mouseover', onMouseMove);
    },
  } 
  
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    },
  }
  
  function criarTooltipBox(element) {
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip')
    toolTipBox.innerHTML = text
    document.body.appendChild(toolTipBox)
    return toolTipBox
  }
}