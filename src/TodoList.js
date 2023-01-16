import React, { useState } from "react";
import AddTask from "./AddTask";

const TodoList = () => {
  const [mainArray, setMainArray] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
  });
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [array4, setArray4] = useState([]);

  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const value = (e.target.value || "").toLowerCase();
    if (value) {
      setArray1(
        mainArray[1].filter((item) => {
          return item.toLowerCase().includes(value);
        })
      );
      setArray2(
        mainArray[2].filter((item) => {
          return item.toLowerCase().includes(value);
        })
      );
      setArray3(
        mainArray[3].filter((item) => {
          return item.toLowerCase().includes(value);
        })
      );
      setArray4(
        mainArray[4].filter((item) => {
          return item.toLowerCase().includes(value);
        })
      );
    } else {
      setArray1(mainArray[1]);
      setArray2(mainArray[2]);
      setArray3(mainArray[3]);
      setArray4(mainArray[4]);
    }
  };

  const addTask = (title) => {
    if (!array1.includes(title)) {
      setArray1([...array1, title]);
      setMainArray({ ...mainArray, 1: [...mainArray[1], title] });
      setShowModal(false);
    } else {
      alert("Title with same name already exists");
    }
  };

  // console.log("finding main array", mainArray)

  const mapOverArray = (array, arrayNo) => {
    return array.map((val, i) => {
      return (
        <div class="card m-2" key={i}>
            <div class="card-body p-2" style={{justifyContent: "space-between",display: "flex"}}>
              <p class="card-text">{val}</p>
              <button style={{color: "red",border: "none",background: "#e4e7ee",borderRadius: "10px"}} onClick={() => deleteTask(arrayNo, val)}><img src={require("../src/img/delete.png")} alt="delete" style={{verticalAlign:"inherit"}} height={"14px"}/>Delete</button>
            </div>

            {arrayNo < 2 && (<div class="card-footer" style={{display: "flex",justifyContent: "end",backgroundColor:"none", border:"none"}}>
            
            {arrayNo !== 1 && (
            <img src={require("../src/img/left.png")} alt="left" height={"24px"} onClick={() => backAndForth(arrayNo, arrayNo - 1, val)}/>
          )}
            {arrayNo !== 4 && (
            <img src={require("../src/img/right.png")} alt="right" height={"24px"} onClick={() => backAndForth(arrayNo, arrayNo + 1, val)}/>
          )}
            </div>)}
            {arrayNo < 4 && arrayNo > 1 && (<div class="card-footer" style={{display: "flex",justifyContent: "space-between",backgroundColor:"none", border:"none"}}>
            
            {arrayNo !== 1 && (
                <img src={require("../src/img/left.png")} alt="left" height={"24px"} onClick={() => backAndForth(arrayNo, arrayNo - 1, val)}/>
          )}
            {arrayNo !== 4 && (
                <img src={require("../src/img/right.png")} alt="right" height={"24px"} onClick={() => backAndForth(arrayNo, arrayNo + 1, val)}/>
          )}
            </div>)}
            {arrayNo > 3  && (<div class="card-footer" style={{display: "flex",justifyContent: "space-between",backgroundColor:"none", border:"none"}}>
            
            {arrayNo !== 1 && (
                <img src={require("../src/img/left.png")} alt="left" height={"24px"} onClick={() => backAndForth(arrayNo, arrayNo - 1, val)}/>
          )}
            {arrayNo !== 4 && (
                <img src={require("../src/img/right.png")} alt="right" height={"24px"} onClick={() => backAndForth(arrayNo, arrayNo + 1, val)}/>
          )}
            </div>)}
          </div>
      );
    });
  };

  const backAndForth = (from, to, val) => {
    const source = eval("array" + from);
    const destination = eval("array" + to);
    const value = source.filter((item) => item !== val);
    if (from > to) {
      destination.push(val);
    } else {
      destination.unshift(val);
    }
    eval("setArray" + from)(value);
    eval("setArray" + to)(destination);
    setMainArray({ ...mainArray, [from]: value, [to]: destination });
  };

  const deleteTask = (from, val) => {
    const filteredArray = eval("array" + from).filter((item) => item !== val);
    eval("setArray" + from)(filteredArray);
    setMainArray({ ...mainArray, 1: filteredArray });
  };

  return (
    <div class="container">
      <div class="row mt-4">
        <div class="d-flex justify-content-between">
          <input
            class="p-2"
            style={{
              backgroundColor: "#e4e7ee",
              border: "none",
              borderRadius: "10px",
            }}
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Search  &#128269;"
          />
          <button
            class="p-2"
            style={{
              backgroundColor: "#e4e7ee",
              border: "none",
              borderRadius: "10px",
            }}
            onClick={() => setShowModal(true)}
          >
            &#10010;&nbsp;Add Task
          </button>
        </div>
      </div>
      
      <div class="row" style={{ height: "85vh" }}>
        <div
          class="col m-3 p-3"
          style={{
            backgroundColor: "#e4e7ee",
            border: "none",
            borderRadius: "5px",
          }}
        >
          STEP 1
          {mapOverArray(array1, 1)}
        </div>
        <div
          class="col m-3 p-3"
          style={{
            backgroundColor: "#e4e7ee",
            border: "none",
            borderRadius: "5px",
          }}
        >
          STEP 2
          {mapOverArray(array2, 2)}
        </div>
        <div
          class="col m-3 p-3"
          style={{
            backgroundColor: "#e4e7ee",
            border: "none",
            borderRadius: "5px",
          }}
        >
          STEP 3
          {mapOverArray(array3, 3)}
        </div>
        <div
          class="col m-3 p-3"
          style={{
            backgroundColor: "#e4e7ee",
            border: "none",
            borderRadius: "5px",
          }}
        >
          STEP 4
          {mapOverArray(array4, 4)}
        </div>
      </div>
      {showModal && <AddTask addTask={addTask} setShowModal={() => setShowModal(false)}/>}
    </div>
  );
};

export default TodoList;
