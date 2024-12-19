"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

interface StockData {
  [key: string]: string | number;
}

export default function Samples() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios("/api/stock");
        // console.log("frontend:", response.data);
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
    <div className="flex flex-col md:flex-row">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        stocks.map((stock, i) => {
          if (stock.close != undefined && stock.symbol) {
            return (
              <div
                key={i}
                className="bg-slate-800 flex border-0 rounded-md md:py-2 md:px-2 md:me-5 py-2 px-2 mb-2"
              >
                <Image
                  src={`/${stock.symbol}.svg`}
                  alt="Logo"
                  width={48}
                  height={48}
                  className="me-3"
                  priority
                />
                <div className="justify-items-center">
                  <label
                    htmlFor=""
                    className="align-middle font-sans font-semibold"
                  >
                    {stock.symbol}
                  </label>
                  <div className="align-middle font-sans font-semibold">{`$ ${parseFloat(
                    stock.close.toString()
                  ).toFixed(2)}`}</div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="bg-slate-800 flex border-0 rounded-md md:py-2 md:px-2 md:me-5 py-2 px-2 mb-2"
              >
                <p className="text-red-500">Run out of API credits</p>
              </div>
            );
          }
        })
      )}
    </div>
  );
}
