import Apps from "./components/Apps";
import Stocks from "./components/Stocks";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        paddingTop: "120px",
      }}
    >
      <div className="flex justify-between">
        <Stocks></Stocks>
        <Apps></Apps>
      </div>
    </div>
  );
}
