let screenResult = document.querySelector("#screenResult");
total = 0;
tempStorage = "";
numberStorage = 0;
operationStatus = "";
const functionButton = (functionType) => {
  switch (functionType) {
    case "clear":
      (tempStorage = ""),
        (numberStorage = 0),
        (operationStatus = ""),
        (screenResult.innerHTML = numberStorage);
      break;
    case "signChange":
      let sign = tempStorage;
      sign !== "" && sign !== 0
        ? Math.sign(sign) == 1
          ? (sign = tempStorage *= -1)
          : (sign = tempStorage *= -1)
        : numberStorage !== 0
        ? Math.sign(numberStorage) == 1
           ? (sign = numberStorage *= -1)
            // console.log(sign, numberStorage)
          : (sign = numberStorage *= -1)
        : (sign = 0);
        console.log(sign,numberStorage);
      screenResult.innerHTML = sign;
      break;
    case "percentage":
      numberStorage = tempStorage;
      tempStorage = "";
      numberStorage *= 0.01;
      screenResult.innerHTML = numberStorage;
      break;
    case "decimal":
      tempStorage += ".";
      screenResult.innerHTML = tempStorage;
  }
};

const numberButton = (number) => {
  tempStorage += `${number}`;
  screenResult.innerHTML = tempStorage;
};

const vagueCalculation = (operation) => {
  switch (operation) {
    case "add":
      numberStorage += tempStorage - 0;
      screenResult.innerHTML = numberStorage;
      break;
    case "subtract":
      numberStorage -= tempStorage - 0;
      screenResult.innerHTML = numberStorage;

      break;
    case "multiply":
      numberStorage *= tempStorage - 0;
      screenResult.innerHTML = numberStorage;

      break;
    case "divide":
      numberStorage /= tempStorage - 0;
      screenResult.innerHTML = numberStorage;

      break;
  }
};

const operatorButton = (operatorType) => {
  switch (operatorType) {
    case "add":
      operationStatus == "" || operationStatus == "add"
        ? (numberStorage += tempStorage - 0)
        : vagueCalculation(operationStatus);
      operationStatus = "add";
      tempStorage = "";
      screenResult.innerHTML = numberStorage;
      break;
    case "subtract":
      numberStorage == 0
        ? (numberStorage = tempStorage - 0)
        : tempStorage !== ""
        ? operationStatus == "" || operationStatus == "subtract"
          ? (numberStorage -= tempStorage - 0)
          : vagueCalculation(operationStatus)
        : tempStorage == "";
      operationStatus = "subtract";
      tempStorage = "";
      screenResult.innerHTML = numberStorage;
      break;
    case "multiply":
      numberStorage == 0
        ? (numberStorage = tempStorage - 0)
        : tempStorage !== ""
        ? operationStatus == "multiply" || operationStatus == ""
          ? (numberStorage *= tempStorage - 0)
          : vagueCalculation(operationStatus)
        : (tempStorage = "");
      operationStatus = "multiply";
      tempStorage = "";
      screenResult.innerHTML = numberStorage;
      break;
    case "divide":
      numberStorage == 0
        ? (numberStorage = tempStorage - 0)
        : tempStorage !== ""
        ? operationStatus == "divide" || operationStatus == ""
          ? (numberStorage /= tempStorage - 0)
          : vagueCalculation(operationStatus)
        : (tempStorage = "");
      operationStatus = "divide";
      tempStorage = "";
      screenResult.innerHTML = numberStorage;
      break;
    case "equal":
      switch (operationStatus) {
        case "add":
          numberStorage += tempStorage - 0;
          tempStorage = "";
          screenResult.innerHTML = numberStorage;
          break;
        case "subtract":
          numberStorage -= tempStorage - 0;
          tempStorage = "";
          screenResult.innerHTML = numberStorage;
          break;
        case "multiply":
          numberStorage *= tempStorage - 0;
          tempStorage = "";
          screenResult.innerHTML = numberStorage;
          break;
        case "divide":
          numberStorage /= tempStorage - 0;
          tempStorage = "";
          screenResult.innerHTML = numberStorage;
          break;
      }
      break;
  }
};
