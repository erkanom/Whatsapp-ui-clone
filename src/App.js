import "./App.css";
import ChatPanel from "./components/chatPanel/chatPanel";
import Sidebar from "./components/sidebar/sidebar";
function App() {
  return (
    <div class="App">
      <div class="app-body">
        <Sidebar />
        <ChatPanel />
      </div>
    </div>
  );
}

export default App;
