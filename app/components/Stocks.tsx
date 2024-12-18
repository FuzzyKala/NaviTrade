"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

interface StockData {
  [key: string]: string | number;
}

export default function Stocks() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios("/api/stock");
        setStocks(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="flex pt-48 ps-40 h-full">
      {error && <p className="text-red-500">{error}</p>}
      {stocks.map((stock) => (
        <div
          key={stock.symbol}
          className="bg-slate-800 flex py-2 px-2 me-5 border-0 rounded-md"
        >
          <Image
            src={`/${stock.symbol}.svg`}
            alt="Logo"
            width={32}
            height={32}
            className="me-3"
            priority
          />
          <div className="justify-items-center">
            <label htmlFor="" className="align-middle font-sans font-semibold">
              {stock.symbol}
            </label>
            <div className="align-middle font-sans font-semibold">{`$ ${parseFloat(
              stock.close.toString()
            ).toFixed(2)}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
