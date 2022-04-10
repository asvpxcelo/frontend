import SideBar from "./components/Sidebar";

import { Text } from './components/Text';

import { Home } from './screens/Home';

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar
        title="SideBar" 
      />
      <Home />
      <Text
        content="Hello World"
        type={'title'}
      />
      <Text
        content="Hello World"
        type={'text'}
      />
    </div>
  );
}

export default App;
