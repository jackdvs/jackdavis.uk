import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-3 p-4 min-h-[300px] sm:min-h-[600px] text-center">
        <img src="/hack.jpeg" alt="hackintosh" />
        {/* <h1 className="landing-title">Website under construction!</h1>
        <p className="landing-text">
          Please come back another time. Thank you!
        </p>
        <p className="landing-text">:-)</p> */}
      </div>
    </div>
  );
}
