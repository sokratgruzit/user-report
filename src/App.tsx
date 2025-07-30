import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserModal from './components/UserModal';

function App() {
  return (
    <div className="container py-5">
      <SearchBar />
      <UserList />
      <UserModal />
    </div>
  );
}

export default App;