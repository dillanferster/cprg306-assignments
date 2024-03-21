"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1 className="font-bold text-lg mb-8">Shopping List</h1>

      {user ? <p>Welcome, {user.displayName}</p> : <p></p>}

      <div>
        {user ? (
          <div>
            <button onClick={firebaseSignOut}>Sign Out</button>
            <div>
              <Link href="week-8/shopping-list">Continue to List</Link>
            </div>
          </div>
        ) : (
          <button onClick={gitHubSignIn}>Sign In with Github</button>
        )}
      </div>
    </div>
  );
}
