export const languages = {
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
