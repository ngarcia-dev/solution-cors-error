function App() {
  return (
    <div>
      <h1>Click</h1>
      <button
        onClick={async () => {
          const res = await fetch("http://localhost:3000/ping", {
            method: 'DELETE'
          });
          const data = await res.text()
          console.log(data);
        }}
      >
        fetch
      </button>
    </div>
  );
}

export default App