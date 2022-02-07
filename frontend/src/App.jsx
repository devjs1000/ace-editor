import { useState, useEffect } from "react";
import { PlayFill, CircleHalf } from "react-bootstrap-icons";
import Hammer from 'hammerjs'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-noconflict/ext-options";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";

import "ace-builds/src-noconflict/ext-error_marker";
import "ace-builds/src-noconflict/ext-emmet";
import "ace-builds/src-noconflict/ext-spellcheck";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/ruby";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/csharp";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-noconflict/snippets/kotlin";
import "ace-builds/src-noconflict/snippets/swift";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/css";

import Console from "./components/Console";

function CodeCompiler() {

  useEffect(()=>{
      const csl=document.getElementById('console')
      const editor=document.getElementById('editor')
      const cslHead=document.querySelector('#console-head')

      const thor=new Hammer.Manager(cslHead)
      const power=new Hammer.Pan()
      thor.add(power)
      thor.on('pan', (e)=>{
        const uniSize=window.innerHeight-e.center.y
        csl.style.height=uniSize+'px'
        editor.style.height=(e.center.y-20)+'px'

        console.log(e.center);
      })


  },[])
  const languages = {
    py: {
      name: "python",
      value: `print('hello world')`,
      ext: "py",
      aceMode: "python",
    },
    html: {
      name: "html",
      value: `<h1>hello world</h1>`,
      ext: "html",
      aceMode: "html",
    },
    swift: {
      name: "swift",
      value: `println('Hello World');`,
      ext: "swift",
      aceMode: "swift",
    },
    kt: {
      name: "kotlin",
      value: `fun main(args: Array<String>){
        println("Hello World")
      }
      `,
      ext: "kt",
      aceMode: "kotlin",
    },
    rb: {
      name: "ruby",
      value: `puts 'Hello World'
      `,
      ext: "rb",
      aceMode: "ruby",
    },
    cs: {
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
      ext: "cs",
      aceMode: "csharp",
    },
    c: {
      name: "c",
      value: `#include <stdio.h>

      int main() {
      printf("Hello World");
      return 0;
      }
      `,
      ext: "c",
      aceMode: "c_cpp",
    },
    cpp: {
      name: "cpp",
      value: `#include <iostream>

      int main() {
        std::cout << "Hello World";
        return 0;
      }
      `,
      ext: "cpp",
      aceMode: "c_cpp",
    },
    java: {
      name: "java",
      value: `import java.io.*;

      class GFG {
          public static void main (String[] args) {
             System.out.println("Hello World");
          }
      }`,
      ext: "java",
      aceMode: "java",
    },
    css: {
      name: "css",
      value: ``,
      ext: "css",
      aceMode: "css",
    },
    js: {
      name: "javascript",
      value: `console.log("Hello World");
      `,
      ext: "js",
      aceMode: "javascript",
    },
  };
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("monokai");
  const [language, setLanguage] = useState("py");
  const [code, setCode] = useState(languages[language].value);
  const [input, setInput] = useState(``);
  const [output, setOutput] = useState(` >> Hello World'
  `);

  const [fontSize, setFontSize] = useState(14);
  const [tab, setTab] = useState(2);

  const htmlView = () => {
    const preview = window.open("", "preview");
    preview.document.open();
    preview.document.write(code);
    preview.document.title = "preview";
    preview.document.close();
  };
  const getOutput = (e) => {
    setLoading(true);
    e.preventDefault();
    if (language == "html") {
      htmlView();
      return;
    }
    // const {name, email, phone, work, password, cpassword} = user;
    fetch("http://localhost:8080/codecompiler", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        language: language,
        input: input,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.message.output);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setCode(e);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
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
    <div className='h-[5vh] bg-stone-900'></div>
      <AceEditor
        style={{ width: "100vw", height: "80vh" }}
        placeholder="Lets code..."
        mode={languages[language].aceMode}
        theme={theme}
        name="editor"
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
      <Console output={output}>
        <div className=" flex">
          <button className="m-2 text-stone-200   font-semibold  text-sm px-2 ">
            console
          </button>
          {loading ? (
            <CircleHalf
              className="animate-spin bg-transparent text-green-400 "
              size={25}
            />
          ) : (
            <PlayFill
              className="bg-transparent text-green-400 "
              size={30}
              onClick={getOutput}
            />
          )}

          <input
            type="text"
            className="px-2 m-2 sm:m-1 text-slate-800"
            placeholder="your input"
            onChange={handleInput}
            value={input}
          />
        </div>
        <div className="mx-2  flex">
          <button className="bg-stone-800 mx-2 text-yellow-200 px-2">
            {theme}
          </button>

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
              setLanguage(e.target.value);
            }}
            value={language}
          >
            {languageArray.map((a, index) => {
              return (
                <option key={index} value={a.ext}>
                  {a.name}
                </option>
              );
            })}
          </select>
          <button className="text-stone-100 mx-2">utf-8</button>
        </div>
      </Console>
    </>
  );
}

export default CodeCompiler;
