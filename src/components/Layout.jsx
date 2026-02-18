const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-xl space-y-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
