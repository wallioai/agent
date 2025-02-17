import AminateWelcome from "./anim";
import Welcome from "./welcome";

export default function Index() {
  return (
    <div className="bg-white h-svh -mt-20 select-none overflow-hidden relative">
      <Welcome />
      <AminateWelcome />
    </div>
  );
}
