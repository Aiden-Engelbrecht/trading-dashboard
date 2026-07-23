import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useMarket } from "../../context/MarketContext";

export default function TradingChart() {

  const { selectedSymbol } = useMarket();

  return (
    <AdvancedRealTimeChart
      theme="dark"
      symbol={selectedSymbol}
      autosize
      width="100%"
      height={500}
    />
  );
}