import Select from "./components/Select";

function App() {
  const onChange = (val: string) => {
    console.log(val);
  };
  return <Select selectValue={"10"} onChange={onChange} nullable={false} />;
}

export default App;
