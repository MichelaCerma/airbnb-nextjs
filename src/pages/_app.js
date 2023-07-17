import "@/styles/globals.css";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContext, useReducer, useState } from "react";

import { animal } from "@/components/Navbar/NavBar";
const reducer = (state, action) => {
  if (action.type === "random_an") {
    return {
      animal: state.animal + 1,
    };
  }
  throw Error("Unknown action.");
};
export default function App({ Component, pageProps }) {
  const newAnimal = useContext(animal);
  console.log(newAnimal);
  const [AuthUser, setAuthUser] = useState(true);
  const [state, dispatch] = useReducer(reducer, {
    animal: "fish",
  });

  return (
    <>
      <NavBar setAuthUser={setAuthUser} AuthUser={AuthUser} />
      <Component {...pageProps} setAuthUser={setAuthUser} />
      <h2>{newAnimal}</h2>;
      <button
        onClick={() => {
          dispatch({ type: "random_an" });
        }}
      >
        Get random animal
      </button>
      <p>random animal: {state.animal}.</p>
      <Footer />
    </>
  );
}
