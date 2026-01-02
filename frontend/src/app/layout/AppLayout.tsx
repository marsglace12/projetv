import { NavLink, Outlet } from "react-router-dom";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "rounded-md px-3 py-2 text-sm transition",
    isActive ? "bg-gray-100 font-semibold" : "text-gray-700 hover:bg-gray-50",
  ].join(" ");
}

export function AppLayout() {
  return (
    <div className="min-h-screen font-sans">
      <header className="p-4 border-b border-gray-200">
        <nav className="flex gap-4">
          <h2 className="text-md p-2 tracking-tight"> Projet V</h2>
          <NavLink to="/" className={navLinkClass} end>
            Aujourd’hui
          </NavLink>
          <NavLink to="/setup" className={navLinkClass}>
            Setup
          </NavLink>
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
        </nav>
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
