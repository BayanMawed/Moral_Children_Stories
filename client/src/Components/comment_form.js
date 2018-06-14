import React, { Component } from 'react';
import IndexForm from './index_comment_form.js';

class Comment extends Component {
  state = {
    data: [
      {id:"id",name:"Nagham Ramadan", age:"25 years",rating:" *****",comment:"This website Stories That Matter could change teaching moral values to the children from a challenging task into afun activity.Thank you very much"},
       {id:"id",name:"Souad ALi", age:"23 years",rating:" ****",comment:" Moral stories create opportunities for children to learn meaningful lessons as well as in achieving broader learning, where they can show compassion and empathy to one another and at the same time be part of a community, creating positive change .This website Stories That Matter could change teaching moral values to the children from a challenging task into afun activity.Thank you very muc"},
       {id:"id",name:"Mitza Haddad", age:"35 years",rating:" ****",comment:"This website Stories That Matter could change teaching moral values to the children from a challenging task into afun activity.Thank you very much"},
       {id:"id",name:"Mari Teriz", age:"21 years",rating:" *****",comment:" Moral stories create opportunities for children to learn meaningful lessons as well as in achieving broader learning, where they can show compassion and empathy to one another and at the same time be part of a community, creating positive change .This website Stories That Matter could change teaching moral values to the children from a challenging task into afun activity.Thank you very muc"},
   
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
        <tr key={d.id} id='field'>
            <td >{d.name}</td>
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
          // title = "Add your comment down please"
          defaultValues = {this.state.current}
          model={[
            {key: "name", label: "Full Name", props: {required: true}},
            {key: "age",label: "Age", type: "number"},
            {key: "rating",label: "Your rating for the website", type: "number", props:{min:0,max:5,required: true}},
            {key: "comment",label: "Your evaluation"},
            ]}
          
          onSubmit = {(model) => {this.onSubmit(model)}} 
        />

        <table border="1">
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

export default Comment;
