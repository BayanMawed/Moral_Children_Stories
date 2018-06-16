import React, { Component } from 'react';
import IndexForm from './index_comment_form.js';

class Comment extends Component {
  state = {
    data: [
       {id:"id",name:"Nagham Ramadan", work:"teacher",rating:"",comment:"This website Stories That Matter could change teaching moral values to the children from a challenging task into a fun activity."},
       {id:"id",name:"Souad Ali", work:"mother",rating:" ",comment:"  Moral stories create opportunities for children to learn meaningful lessons."},
       {id:"id",name:"Mitza Haddad", work:"teacher",rating:" ",comment:"This website Stories That Matter could change teaching moral values to the children from a challenging task into a fun activity."},
       {id:"id",name:"Mari Teriz", work:"babysitter",rating:" ",comment:" Moral stories create opportunities for children to learn meaningful lessons as well as in achieving broader learning, where they can show compassion and empathy to one another and at the same time be part of a community, creating positive change."},
       
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
        <div key={d.id} id='field'>
            <div >
             <p1>{d.name}, {d.work}</p1>
              {/* {d.rating} */}
              <p>{d.comment}</p>
             </div>
            {/* <td><button onClick={()=>{this.onEdit(d.id)}}>edit</button></td> */}
        </div>
      );
    });
    
    return (
      <div className="App">

<table >
          <tbody>{data}</tbody>
        </table>
        <h4>Please add your evaluation down</h4>
        <IndexForm className="form"
          // title = "Add your comment down please"
          defaultValues = {this.state.current}
          model={[
            {key: "name", label: "Full Name", props: {required: true}},
            {key: "work",label: "Work", type: "text"},
            {key: "rating",label: "Your rating for the website", type: "number", props:{min:0,max:5,required: true}},
            {key: "comment",label: "Your evaluation"},
            ]}
          
          onSubmit = {(model) => {this.onSubmit(model)}} 
        />

      </div>
    );
  }
}

export default Comment;
