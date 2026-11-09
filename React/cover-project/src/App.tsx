
export default function App() {
  return(
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header></Header>
    </div>
  );
}
function Header(){
  return (
    <header className="flex items-center justify-center ">
      <div className="flex flex-col gap1">
        <h1 className="text-3xl font-bold">Habit Traker</h1>
        <span className="text-zinc-400 text-sm">
          1 / 1 done today
        </span>
      </div>
    </header>
  );
}
