import Apps from "./components/Apps";
import Stocks from "./components/Stocks";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/bg4.jpg')" }}
    >
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 justify-items-center content-center">
          <Stocks />
        </div>
        <div className="w-full md:w-1/2 justify-items-center content-center">
          <Apps />
        </div>
      </div>
    </div>
  );
}
