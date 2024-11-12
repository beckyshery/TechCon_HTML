import React from 'react';

// Header Component
function Header() {
  return (
    <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '20px' }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

// UserProfile Component
function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

// MainContent Component
function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ color: 'darkslategray' }}>Main Content</h2>
      <p>This is where the main content will go.</p>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '10px' }}>
      <p>&copy; 2024 My Favorite Cities. All rights reserved.</p>
    </footer>
  );
}

// App Component
function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age="30" bio="A passionate traveler." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
