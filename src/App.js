import { useState } from "react";
import "./styles.css";

function App() {
  const [formFields, setFormFields] = useState([{ step: "", result: "" }]);

  const [title, setTitle] = useState([{ title: "" }]);

  const handleFormChange = (name, event, index) => {
    let data;
    if (name !== "title") {
      data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    } else {
      data = [...title];
      data[index][event.target.name] = event.target.value;
      setTitle(data);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    var titleValue = title[0];
    
    let merged = {
      ...titleValue,
      ...formFields
    };

    console.log(merged);
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
