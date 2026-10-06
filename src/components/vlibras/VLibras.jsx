import { useEffect } from 'react';

const VLIBRAS_APP_URL = 'https://vlibras.gov.br/app';

export function VLibras() {
  useEffect(() => {
    if (window.__vlibrasLoaded) return;
    window.__vlibrasLoaded = true;

    const script = document.createElement('script');
    script.src = `${VLIBRAS_APP_URL}/vlibras-plugin.js`;
    script.async = true;
    script.onload = () => {
      new window.VLibras.Widget(VLIBRAS_APP_URL);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}