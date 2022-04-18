import React, { useEffect, useState } from "react";
import "./App.css";

interface AppState {
  subs: Array<sub>;
  newSubsNumber: number;
}

interface sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "dapelu moderador esto es una descricion ",
  },
  {
    nick: "sergio_cerrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    description: "sergio pt",
  },
  {
    nick: "ricardo",
    subMonths: 8,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick}(<small>{sub.subMonths}</small>)
                <p>{sub.description?.substring(0, 100)}</p>
              </h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
