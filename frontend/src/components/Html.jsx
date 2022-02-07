const htmlView = () => {
    const preview = window.open("", "web preview");
    preview.document.open();
    preview.document.write(code);
    preview.document.title = "web preview";
    preview.document.close();
  };

  export default htmlView