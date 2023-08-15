import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Tooltip(props) {
  useEffect(() => {
    document.addEventListener('pointerdown', hideTooltip);
    return () => {
      document.removeEventListener('pointerdown', hideTooltip);
    };
  }, []);

  const hideTooltip = () => {
    let control = document.querySelector('#tooltip-popup');
    if (control !== null && control.style.display !== 'none') {
      control.style.display = 'none';
      document.getSelection().removeAllRanges();
    }
  };

  const showTooltip = () => {
    let control = document.querySelector('#tooltip-popup');
    const selection = document.getSelection(),
      text = selection.toString();

    if (text !== '') {
      let rect = selection.getRangeAt(0).getBoundingClientRect();
      control.style.display = 'block';
      control.style.top = `calc(${rect.top}px - 55px)`;
      control.style.left = `calc(${rect.left}px + calc(${rect.width}px / 2) - 40px)`;
    }
  };

  const openLink = (link) => {
    window.open(link);
  };

  return (
    <>
      <div onPointerUp={() => showTooltip()} onWheel={hideTooltip}>
        {props.children}
      </div>
      {createPortal(
        <div id='tooltip-popup'>
          <span>{props.text}</span>

          {props.toolTipIcons.map((icon, index) => (
            <span key={index} onPointerDown={() => openLink(icon.link)}>
              <img src={icon.url} alt={icon.alt} />
            </span>
          ))}
        </div>,
        document.body
      )}
    </>
  );
}

export default Tooltip;
