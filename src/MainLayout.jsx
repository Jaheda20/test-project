import { Outlet } from "react-router-dom";

export default function MainLaout() {
  return (
    <div>
      <nav>nav</nav>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
}
