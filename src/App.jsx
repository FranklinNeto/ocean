import Card from "./components/Card";
import GridCards from "./components/GridCards";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <GridCards>
        <Card />
      </GridCards>
    </>
  );
}

export default App;
