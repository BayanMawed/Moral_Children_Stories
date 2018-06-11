import React, { Component } from 'react';
import IndexForm from './index_comment_form.js';

class Form extends Component {
  state = {
    data: [
      {id:"id",name:"Name", age:"Age",rating:" Rating",comment:"Comment"},
    
    ],
    current: {}
  }

  onSubmit = (model) => {
    model.id = +new Date();
    alert("Your comment has been submitted successfully");
    // alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
      
    })
  }

  // onEdit = (id) => {
  //   let record = this.state.data.find((d) => {
  //     return d.id == id;
  //   });
  //   alert(JSON.stringify(record));
  //   this.setState({
  //     current: record
  //   })
  // }

  render() {
    let data = this.state.data.map((d) => {
      return (
        <tr key={d.id}>
            <td>{d.name}</td>
            <td>{d.age}</td>
            <td>{d.rating}</td>
            <td>{d.comment}</td>
            {/* <td><button onClick={()=>{this.onEdit(d.id)}}>edit</button></td> */}
        </tr>
      );
    });
    
    return (
      <div className="App">
        <IndexForm className="form"
          // title = "Add your comment about this story"
          defaultValues = {this.state.current}
          model={[
            {key: "name", label: "Name", props: {required: true}},
            {key: "age",label: "Age", type: "number"},
            {key: "rating",label: "Your Rating for the story", type: "number", props:{min:0,max:5,required: true}},
            {key: "comment",label: "Your Comment"},
            ]}
          
          onSubmit = {(model) => {this.onSubmit(model)}} 
        />

        <table border="6">
          <tbody>{data}</tbody>
        </table>

      </div>
    );
  }
}

export default Form;
