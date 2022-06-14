import { useEffect, useState } from "react";

const useVariant = (experimentId: string) => {
  const [variant, setVariant] = useState();

  useEffect(() => {
    (async () => {
      const w = (window as any);
      if (w.dataLayer) {
        await w.dataLayer.push({ event: 'optimize.activate' })
      }
      const intervalId = setInterval(() => {
        if (w.google_optimize !== undefined) {
          setVariant(w.google_optimize.get(experimentId));
          clearInterval(intervalId);
        }
      }, 100);
    })();
  })
  return variant;
}

export default useVariant;