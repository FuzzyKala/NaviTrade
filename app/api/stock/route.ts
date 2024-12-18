import { NextResponse } from "next/server";
import axios from "axios";

const APIUrl = process.env.TwelveData_URL;
const APIkey = process.env.TwelveData_APIKey;

export async function GET() {
  try {
    const symbolName = ["AAPL", "MSFT", "TSLA"];
    const response = await axios(
      `${APIUrl}/quote?symbol=${symbolName.join(
        ","
      )}&interval=1min&apikey=${APIkey}`
    );
    const stocksArray = Object.values(response.data);
    return NextResponse.json(stocksArray);
  } catch (error) {
    console.error("Error fetching data from TwelveData:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
