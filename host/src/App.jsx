import './App.css';
import Button from 'remoteApp/Button';
import NotificationCard from 'remoteApp/NotificationCard';
import useStore from 'remoteApp/Store';

function App() {
  const [count, setCount] = useStore();
  return (
    <div className="App">
      <h1>Host Application</h1>
      <p className="my-4">This Content served from remote host</p>

      <Button onClick={() => setCount((count) => count + 1)}>Host Button Clicked - {count}</Button>

      <NotificationCard />
    </div>
  );
}

export default App;
