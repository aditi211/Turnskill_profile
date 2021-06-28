import React from "react";

export default class QuestionComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //value: [],
      val: "",
      isEdit: false
    };

    this.handleBlurItem = this.handleBlurItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.itemChange = this.itemChange.bind(this);
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

    const { item } = this.props;
    const { index } = this.props;

    return (
      <div style={styles.listitem}>
        <div key={index} style={styles.items}>
          {this.state.isEdit ? (
            <input
              value={item}
              onBlur={this.handleBlurItem}
              onChange={event => this.itemChange(index, event)}
            />
          ) : (
            <div>
              <span onClick={() => this.handleEditItem(index)}>{item} </span>
              <span onClick={() => this.handleRemoveItem(index)}> |x </span>
            </div>
          )}
        </div>
      </div>
    );
  }
  handleBlurItem(item) {
    this.setState({
      value: item,
      isEdit: false
    });
    //this.props.updateItems(item);
  }

  handleRemoveItem(index) {
    this.props.onRemoveItem(index);
  }

  handleEditItem(i) {
    this.setState({
      isEdit: true
    });
  }

  itemChange(i, evt) {
    this.props.updateItem(this.props.index, evt.target.value);
  }
}
