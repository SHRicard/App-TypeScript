import React, { useEffect, useState } from "react";
import List from "./Components/List";
import From from "./Components/From";
import { sub } from "./Components/types";
import "./App.css";

interface AppState {
  subs: Array<sub>;
  newSubsNumber: number;
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
      <List subs={subs} />
      <From />
    </div>
  );
}

export default App;
