import DashboardTiles from "../components/sections/DashboardTiles";

export default function HomePage() {
  return (
    <div className="min-h-[800px]">
      <div className="container">
        <DashboardTiles />
      </div>
      <hr className="my-20" />
    </div>
  );
}
