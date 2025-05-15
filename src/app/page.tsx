
import DuaView from "@/components/DuaView";
import CategoryView from "@/components/CategoryView";

export default function Home() {

  return (
    <main className="px-8 pt-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <CategoryView/>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <DuaView />
        </div>
      </div>
    </main>
  );
}
