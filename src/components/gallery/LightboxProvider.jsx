import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Lightbox } from './Lightbox';

const LightboxContext = createContext(null);

/**
 * Holds the currently open photo series. Items are either a slot id or an
 * `{ id, alt }` pair.
 */
export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, list: [], index: 0 });

  const open = useCallback((list, index) => setState({ open: true, list, index }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const prev = useCallback(
    () => setState((s) => ({ ...s, index: (s.index - 1 + s.list.length) % s.list.length })),
    [],
  );
  const next = useCallback(
    () => setState((s) => ({ ...s, index: (s.index + 1) % s.list.length })),
    [],
  );

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {state.open && (
        <Lightbox list={state.list} index={state.index} onClose={close} onPrev={prev} onNext={next} />
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) throw new Error('useLightbox must be used inside a LightboxProvider');
  return context;
}
