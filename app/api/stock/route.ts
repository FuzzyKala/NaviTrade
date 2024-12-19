import { NextResponse } from "next/server";
import axios from "axios";

const APIUrl = process.env.TwelveData_URL;
const APIkey = process.env.TwelveData_APIKey;

interface Stock {
  symbol: string;
  close: number;
}

export async function GET() {
  try {
    const symbolName = ["AAPL", "MSFT", "TSLA"];
    const response = await axios(
      `${APIUrl}/quote?symbol=${symbolName.join(
        ","
      )}&interval=1min&apikey=${APIkey}`
    );
    const stocksArray = Object.values(response.data);
    if (!stocksArray || stocksArray.length === 0) {
      throw new Error("No stock data found");
    }
    const returnSampleObj = createSampleObj(stocksArray as Stock[]);
    return NextResponse.json(returnSampleObj);
  } catch (error) {
    console.error("Error fetching data from TwelveData:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

const createSampleObj = (stocksArray: Stock[]) => {
  return stocksArray.map((stock) => ({
    symbol: stock.symbol,
    close: stock.close,
  }));
};
