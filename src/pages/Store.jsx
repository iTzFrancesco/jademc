import { useEffect, useState } from 'react';

const STORE_URL = 'https://store.icemc.it';

const Store = () => {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const newTab = window.open(STORE_URL, '_blank', 'noopener,noreferrer');
    if (!newTab) {
      setBlocked(true);
    }
  }, []);

  return (
    <div className="py-20 px-4 text-center">
      <p className="text-ice-light/80">
        {blocked ? 'Popup bloccato. Apri lo store dal link qui sotto.' : 'Store aperto in una nuova scheda.'}
      </p>
      <a
        href={STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-ice-glow underline"
      >
        Apri store.icemc.it
      </a>
    </div>
  );
};

export default Store;
