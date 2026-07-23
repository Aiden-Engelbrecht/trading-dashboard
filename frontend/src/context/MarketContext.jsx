import { createContext, useContext, useState } from "react";

const MarketContext = createContext();

export function MarketProvider({ children }) {
  const [selectedSymbol, setSelectedSymbol] = useState("OANDA:XAUUSD");

  return (
    <MarketContext.Provider
      value={{
        selectedSymbol,
        setSelectedSymbol,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket() {
  return useContext(MarketContext);
}