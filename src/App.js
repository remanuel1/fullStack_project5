import './App.css';

function App() {

  const userDetails = JSON.parse(localStorage.getItem('current'));

  const handleLogout = () => {
    localStorage.removeItem('userDetails');
  }

  return (
    <div>
      <h1>{userDetails.username}'s Dashboard</h1>
      <nav>
        <ul>
          <li><button>Info</button></li>
          <li><button>Todos</button></li>
          <li><button>Posts</button></li>
          <li><button>Albums</button></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <div>Area for content</div>
    </div>
  );
}

export default App;
