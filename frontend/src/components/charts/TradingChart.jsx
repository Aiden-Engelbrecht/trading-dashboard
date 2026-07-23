import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useState } from "react";

import ChartToolbar from "./ChartToolbar";

export default function TradingChart() {
  const [symbol, setSymbol] = useState("OANDA:XAUUSD");

  return (
    <>
      <ChartToolbar onSymbolChange={setSymbol} />

      <AdvancedRealTimeChart
        theme="dark"
        symbol={symbol}
        width="100%"
        height={600}
        autosize
      />
    </>
  );
}