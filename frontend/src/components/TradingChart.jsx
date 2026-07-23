import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export default function TradingChart() {
  return (
    <AdvancedRealTimeChart
      theme="dark"
      symbol="OANDA:XAUUSD"
      width="100%"
      height={500}
      autosize
    />
  );
}