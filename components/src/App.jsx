import NotificationsCard from 'customui/notifications_card';
import Button from 'customui/button';
import Header from 'customui/header';
import useCount from '@/store/';

function App() {
  const [count, setCount] = useCount();
  return (
    <div className="App">
      <div className="content">
        <Header className="text-xl text-black" />
        <Button
          onClick={() => setCount((count) => count + 1)}
          wrapClassName="flex items-center justify-center content-around my-6"
        >
          Local Click Me - {count}
        </Button>

        <NotificationsCard />
      </div>
    </div>
  );
}

export default App;
