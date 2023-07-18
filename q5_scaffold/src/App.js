import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  const { joke, loading, error, fetchJoke } = useFetch(url);  

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      {!loading && !error && (
        <>
          {joke.includes("-") ? (
            <div>
              <h2>{joke.split("-")[0]}</h2>
              <p>{joke.split("-")[1]}</p>
            </div>
          ) : (
            <h2>{joke}</h2>
          )}
        </>
      )}
      <button className="btn" onClick={fetchJoke}>
        New Joke
      </button>
    </div>
  );
}
