import { PacmanLoader } from "react-spinners";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-4 p-4 min-h-[300px] sm:min-h-[600px] text-center">
        <h1 className="landing-title">Website coming soon, stay tuned! :-)</h1>

        <PacmanLoader
          size={32}
          className="-ml-[50px] float-left -mb-[50px]"
          color="black"
        />
        <PacmanLoader size={32} className="-ml-[50px]" color="gold" />
      </div>
    </div>
  );
}
