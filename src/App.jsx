import Layout from "./components/Layout";
import InputDemo from "./components/InputDemo";

const App = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center">
        Styling & Composition Demo
      </h1>

      <InputDemo />
    </Layout>
  );
};

export default App;
