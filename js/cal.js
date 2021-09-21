let backspace = function () {
    let inputText = document.getElementById("display-box").value;
    document.getElementById("display-box").value = inputText.substring(
      0,
      inputText.length - 1
    );
  };
  