import "./App.css";
import { useState } from "react";
import Help from "./components/Help";
import Input from "./components/Input";
import DeadInput from "./components/DeadInput";

function App() {
  const [mode, setMode] = useState("dark");
  const [command, setCommand] = useState("");

  const reverter = () => {
    setTimeout(() => {
      setMode("dark");
    }, 2000);
  };

  const commandCatalog = {
    'help' : <div><Help/></div>,
    'input' :<div><Input/></div>
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "help") {
        setCommand("help");
      }
     else if (e.target.value === "command") {
          setCommand("command");
     }
     else if (e.target.value === "clear") {
      setCommand("clear")
     }

      } else {
      //does nothing    
      }
    } 

  return (
    <div
      className={
        mode === "dark"
          ? `h-screen bg-neutral-800 grid place-items-center`
          : `h-screen bg-white grid place-items-center`
      }
    >
      <div className="flex justify-end w-full">
        <button className="p-2 rounded-md bg-neutral-700 text-neutral-300 mx-6">
          {mode === "light" ? (
            <svg
              onClick={() => {
                setMode("dark");
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => {
                setMode("light");
                reverter();
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="w-[60%]">
        <div
          className={
            mode === "dark"
              ? `text-white w-full text-center text-[150%] my-[4%]`
              : `text-black w-full text-center text-[150%] my-[4%]`
          }
        >
          <p>
            {mode === "light"
              ? `Lightmode is for heretics, I'll be reverting now`
              : `SOME PROFOUND QUOTE HERE`}
          </p>
        </div>

        <div className="my-4 grid place-items-center text-white p-3 bg-neutral-700 rounded-md">
          <p>Type "help" to get some clarity in this world</p>
          <p>Type "commands" for list of commands</p>
        </div>

        {/* Terminal */}
        <div className="bg-black h-[60vh] border shadow-sm rounded-sm">
          {/* help command */}
          {command === "help" ? (
              commandCatalog.help
          ) : (
            <></>
          )}

          {/* command command */}
          {command === "command" ? (
            <div>
              <DeadInput command={command}/>
            <div className="text-white font-mono text-[90%]">
              <p className="mx-6">
                type "project" to view all projects <br/>
                type "contact" to check contact options <br/>
                type "skill" to view skill sets <br/>
                type "reachout" to find where I live <br/>
              </p>
            </div>
            </div>
          ) : (
            <></>
          )}


          {/* project command */}

          {/* contact command */}

          {/* skill command */}

            {/* reachout command */}

          <Input handleKeyDown={handleKeyDown}/>
        </div>
      </div>
    </div>
  );
}

export default App;
