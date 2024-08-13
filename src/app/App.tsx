import { Text } from "@/shared/ui";
import { IWWW } from "./types";

const App = () => {
  const a: IWWW = "hello";

  return (
    <div>
      {a}
      Todos App
      <Text />
    </div>
  );
};

export default App;
