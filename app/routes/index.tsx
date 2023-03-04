import ProjectNeoLogo from "../../assets/project-neo-logo.svg";
export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
      }}
    >
      <div>
        <div className="absolute flex items-center h-20 left-56 top-32">
          <img src={ProjectNeoLogo} alt="logo" />
          <span className="mr-3 text-white">About</span>
          <span className="mr-3 text-white">Content</span>
          <span className="mr-3 text-white">Login</span>
        </div>
      </div>
    </div>
  );
}
