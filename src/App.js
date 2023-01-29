import { useState } from "react";
import "./styles.css";

function App() {
  const [formFields, setFormFields] = useState([{ step: "", result: "" }]);

  const [title, setTitle] = useState([{ title: "" }]);

  const handleFormChange = (test, event, index) => {
    if (test !== "title") {
      let data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    } else {
      let data = [...title];
      data[index][event.target.name] = event.target.value;
      setTitle(data);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log(title, formFields);

    var titleValue = title[0];
    var test = formFields[0];

    let merged = {
      ...titleValue,
      ...test
    };

    console.log(merged);

    // const allRules = Object.assign({}, formFields, title);
    // console.log(allRules)
  };

  const addFields = () => {
    let object = {
      step: "",
      result: ""
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="App" onSubmit={submit}>
      {title.map((form, index) => {
        return (
          <input
            name="title"
            placeholder="title"
            onChange={(event) => handleFormChange("title", event, index)}
            value={title.name}
          />
        );
        // />
      })}
      <form>
        {formFields.map((form, index) => {
          return (
            <div>
              <div key={index}>
                <input
                  name="step"
                  placeholder="Step"
                  onChange={(event) => handleFormChange("form", event, index)}
                  value={form.step}
                />
                <input
                  name="result"
                  placeholder="Result"
                  onChange={(event) => handleFormChange("form", event, index)}
                  value={form.result}
                />
                <button onClick={() => removeFields(index)}>Remove</button>
              </div>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
