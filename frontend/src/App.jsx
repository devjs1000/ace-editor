import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-ruby";

import Console from "./components/Console";

function CodeCompiler() {
  const languages = [
    {
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
    {
      name: "python",
      value: `print("Hello World")
    `,
    },
    { name: "javascript", value: `console.log('hello world')` },
    {
      name: "html",
      value: `
    <h1>hello world</h1>
    `,
    },
    {
      name: "css",
      value: `
    body::before{
      content:'hello world';
      height:100vh;
      width:100vw;
      display:grid;
      place-items:center;
    }
    `,
    },
    { name: "typescript", value: `` },
    {
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
    { name: "rust", value: `println!("hello world")` },
    { name: "golang", value: `println('Hello World");` },
    { name: "tsx", value: `console.log('hello world')` },
    { name: "tsx", value: `console.log('hello world')` },
    {
      name: "dart",
      value: `main(){
      print('Hello World');
    }
    `,
    },
    { name: "ruby", value: `` },
  ];

//the above code is creating a boiler plate of default and it is just an object required for functionality

  const [theme, setTheme] = useState("github");
  const [code, setCode] = useState(``);
  const [language, setLanguage] = useState("java");
  const [input, setInput] = useState(``);
  const [output, setOutput] = useState(`puts 'Hello World'
  `);

  // const getOutput = async (e) => {
  //   e.preventDefault();
  //   const data = await res.json();

  //   if (res.status == 200) {
  //     setOutput(data.message.output);
  //     return console.log("Barobar hai :", data, "output: ", output);
  //   } else {
  //   }
  // };

  const handleEditor = () => {};

  return (
    <>
      <AceEditor
        style={{ width: "100vw" }}
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <Console />
    </>
  );
}

export default CodeCompiler;
