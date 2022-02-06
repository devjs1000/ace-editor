import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/ext-error_marker";
import "ace-builds/src-noconflict/ext-emmet";
import "ace-builds/src-noconflict/ext-spellcheck";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/rust";
import "ace-builds/src-noconflict/snippets/golang";
import "ace-builds/src-noconflict/snippets/dart";
import "ace-builds/src-noconflict/snippets/ruby";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/jsx";
import "ace-builds/src-noconflict/snippets/tsx";
import "ace-builds/src-noconflict/snippets/typescript";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/csharp";

import Console from "./components/Console";

function CodeCompiler() {
  const languages = {
    java: {
      name: "java",
      value: `
import java.io.*;

class GFG {
	public static void main (String[] args) {
	System.out.println("Hello World");
	}
}

    `,
    },
    python: {
      name: "python",
      value: `print("Hello World")
    `,
    },
    javascript: { name: "javascript", value: `console.log('hello world')` },
    html: {
      name: "html",
      value: `
    <h1>hello world</h1>
    `,
    },
    typescript: { name: "typescript", value: `` },
    csharp: {
      name: "csharp",
      value: `namespace HelloWorld
    {
      class Hello {		
        static void Main(string[] args)
        {
          System.Console.WriteLine("Hello World");
        }
      }
    }
    `,
    },
    rust: { name: "rust", value: `println!("hello world")` },
    golang: { name: "golang", value: `println('Hello World");` },
    tsx: { name: "tsx", value: `console.log('hello world')` },
    jsx: { name: "tsx", value: `console.log('hello world')` },
    dart: {
      name: "dart",
      value: `main(){
      print('Hello World');
    }
    `,
    },
    ruby: { name: "ruby", value: `` },
  };

  //the above code is creating a boiler plate of default and it is just an object required for functionality

  const [theme, setTheme] = useState("monokai");
  const [language, setLanguage] = useState("html");

  const [code, setCode] = useState(languages[language].value);
  const [input, setInput] = useState(``);
  const [output, setOutput] = useState(`puts 'Hello World'
  `);
  const [fontSize, setFontSize]=useState(14)
  const [tab, setTab] = useState(2);

  const getOutput = async (e) => {
    e.preventDefault();
    if (language == "html") {
      const preview = window.open("", "preview");
      preview.document.open();
      preview.document.write(code);
      preview.document.title = "preview";
      preview.document.close();
      return;
    }
    // const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch("/codecompiler", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        language: language,
        input: input,
      }),
    });
    const data = await res.json();

    if (res.status == 200) {
      setOutput(data.message.output);
      return console.log("Barobar hai :", data, "output: ", output);
    } else {
      // dispatch({ type: "USER", payload: true })
      // console.log(data)
      // setOutput(data)
      console.log("Error Occured");
      // window.alert("Login Successful");
      // const notiftoast =()=> toast.success('Login Successful', {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     });
      //     notiftoast();
      // history.push("/")
    }
  };

  const handleChange = (e) => {
    setCode(e);
  };

  const objToArr = (obj) => {
    let keys = Object.keys(obj);
    let arr = keys.map((a) => {
      return obj[a];
    });
    return arr;
  };
  const languageArray = objToArr(languages);
  return (
    <>
      <AceEditor
        style={{ width: "100vw", height: "80vh" }}
        placeholder="Placeholder Text"
        mode={language}
        theme={theme}
        name="code-editor"
        onChange={handleChange}
        fontSize={fontSize}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: tab,
          
          enableEmmet: true,
          spellcheck: true,
        }}
      />
      <Console value={output}>
        <div>
          <button className="mx-2 bg-white text-stone-900 font-semibold  text-sm px-2 ">
            console
          </button>
          <button
            onClick={getOutput}
            className="mx-2 bg-white text-stone-900 font-semibold  text-sm px-2 "
          >
            run
          </button>
        </div>
        <div className="mx-2">

          <button className="bg-stone-800 text-yellow-200 px-2">{theme}</button>
          <select
            className="bg-stone-800 mx-2 pr-2"
            onChange={(e) => {
              setTab(e.target.value);
            }}
            value={tab}
          >
            <option value="2">tabSize: 2</option>
            <option value="4">tabSize: 4</option>
            <option value="6">tabSize: 6</option>
            <option value="8">tabSize: 8</option>
          </select>



          <select
            className="bg-stone-800"
            onChange={(e) => {
              let lang = languages[e.target.value];
              setCode(lang.value);
              setOutput("");
              setInput("");
              setLanguage(lang.name);
            }}
            value={language}
          >
            {languageArray.map((a) => {
              return <option>{a.name}</option>;
            })}
          </select>
          <button className="text-stone-100 mx-2">utf-8</button>
        </div>
      </Console>
    </>
  );
}

export default CodeCompiler;
