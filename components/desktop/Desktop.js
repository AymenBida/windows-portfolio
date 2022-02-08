const Desktop = ({ children, background }) => (
  <div
    className="desktop background"
    style={{ backgroundImage: `url(${background || "/default-wallpaper.jpg"})` }}
  >
    {children}
  </div>
);

export default Desktop;
