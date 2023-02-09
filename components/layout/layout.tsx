import MainHeader from "./main-header";
const Layout = (props) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
