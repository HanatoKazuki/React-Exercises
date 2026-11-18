import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
    <div>
      {isSubscribed ? (
        <div>
          <p>Subscribed! </p> <br />
          <p>Please check your email ({email}) for confirmation)</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubscribed(true);
          }}
        >
          Name: <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br /> <br />
          Email: <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export default App;
