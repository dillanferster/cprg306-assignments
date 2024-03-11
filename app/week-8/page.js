"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1>Week 8</h1>

      {user ? <p>Welcome, {user.displayName}</p> : <p>Please Sign In</p>}

      <div>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In with Github</button>
        )}
      </div>
    </div>
  );
}
