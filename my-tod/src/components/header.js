import React,{Component} from "react";
class HeadModel extends Component{
  changeval=(ev)=>{
    this.props.changeval(ev.target.value)
  }
  keyup = (ev) => {
    if (ev.target.value) {
        if(ev.keyCode === 13){
        let json = {
          txt:ev.target.value,
          id: +new Date(),
          checked:false
        }
        this.props.changeData(json);
      }
    }
  }
  render(){
    return (
       <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.val}
            onChange={this.changeval}
            onKeyUp = {this.keyup}
          />
      </header>
    )
  }
}
export default HeadModel;
