import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserModal from './components/UserModal';

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Отчет по пользователям</h1>
      <SearchBar />
      <UserList />
      <UserModal />
    </div>
  );
}

export default App;