import React from "react";
import QuestionComp from "./QuestionComp";

const initialValues = [
  { label: "Test1", value: "Test1" },
  { label: "Test2", value: "Test2" },
  { label: "Test3", value: "Test3" }
];

const createOption = label => ({
  label,
  value: label
});

export default class TagsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //value: [],
      value: initialValues,
      focused: false,
      inputValue: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.updateQItem = this.updateQItem.bind(this);
  }

  render() {
    const styles = {
      container: {
        border: "1px solid #ddd",
        padding: "5px",
        borderRadius: "5px"
      },

      items: {
        display: "inline-block",
        padding: "2px",
        border: "1px solid black",
        fontFamily: "Helvetica, sans-serif",
        //borderRadius: "5px",
        marginRight: "5px",
        cursor: "pointer"
      },

      listitem: {
        display: "inline-block"
      },

      input: {
        outline: "none",
        border: "none",
        fontSize: "14px",
        fontFamily: "Helvetica, sans-serif"
      }
    };
    return (
      <label>
        <ul style={styles.container}>
          {this.state.value.map((item, i) => (
            // <li style={styles.listitem}>
            //   <div key={i} style={styles.items}>
            //     <span onClick={this.handleEditItem(i)}>{item.label} </span>
            //     <span onClick={this.handleRemoveItem(i)}> |x </span>
            //   </div>
            // </li>
            <QuestionComp
              item={item.label}
              index={i}
              key={i}
              //onEditItem={() => this.editItem(i)}
              onRemoveItem={i => this.handleRemoveItem(i)}
              updateItem={this.updateQItem}
            />
          ))}
          <input
            style={styles.input}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
            onBlur={this.handleBlur}
          />
        </ul>
      </label>
    );
  }

  editItem(index) {}

  updateQItem(index, item) {
    console.log(this.state, "update q ");
    let it = this.state.value.filter((x, i) => i === index);
    console.log(it[0].label, "updated item");
    it[0].label = item;
    it[0].value = item;
    // this.setState(state => ({
    //   value: state.value.filter((x, i) => i !== index)
    // }));
    if (item !== "") {
      this.setState(state => ({
        value: [...state.value, createOption(item)],
        inputValue: ""
      }));
    }
  }

  handleRemoveItem(index) {
    console.log(
      index,
      "tesr",
      this.state.value.filter((item, i) => i !== index)
    );
    this.setState(state => ({
      value: state.value.filter((item, i) => i !== index)
    }));
  }

  handleBlur(evt) {
    const { value } = evt.target;

    if (value !== "") {
      this.setState(state => ({
        value: [...state.value, createOption(value)],
        inputValue: ""
      }));
    }

    console.log(this.state.value, "blur");
  }

  handleInputChange(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  handleInputKeyDown(evt) {
    if (evt.keyCode === 13) {
      const { value } = evt.target;

      if (value !== "") {
        this.setState(state => ({
          value: [...state.value, createOption(value)],
          inputValue: ""
        }));
      }
    }

    if (evt.keyCode === 9) {
      const { value } = evt.target;

      if (value !== "") {
        this.setState(state => ({
          value: [...state.value, createOption(value)],
          inputValue: ""
        }));
      }
    }

    if (
      this.state.value.length &&
      evt.keyCode === 8 &&
      !this.state.inputValue.length
    ) {
      this.setState(state => ({
        value: state.value.slice(0, state.value.length - 1)
      }));
    }

    console.log(this.state.value);
  }

  handleEditItem(index) {
    return () => {
      let it = this.state.value.filter((item, i) => i === index);
      console.log(it);
      this.setState(state => ({
        value: state.value.filter((item, i) => i !== index),
        inputValue: it[0].label
      }));
      //need to change to text box or open a new textbox
    };
  }
}
