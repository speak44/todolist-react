import React,{Component} from "react";
class MainModel extends Component{
   constructor(){
      super()
      this.state={
         db:false
      }
   }
   //点击划√
  chch=()=>{
      this.props.chch(this.props.id)
    }
    //点击删除项
  remove=()=>{
    this.props.remove(this.props.id)
  }
  //双击事件
  dbClick=()=>{
     this.db.value=this.props.txt
     this.setState({
        db:true
     },()=>{
        //触发聚焦事件
        this.db.focus()
     })
 };
 //失焦事件
 blur=()=>{
    let {id,checked}=this.props
    let newData={
      id:id,
      checked:checked,
      txt:this.db.value
   }
   this.props.changeText(newData)
   this.setState({
      db:false
   },()=>{
      this.db.value=''
   })
}
  render(){
    let {checked,txt}=this.props;
    let sclass=checked?'completed':'';
    if (this.state.db) {
      sclass+='editing'
    }
    return (
        <li className={sclass}>
            <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={this.chch}
                  checked={checked}
                  />
                <label
                  onDoubleClick = {this.dbClick}>
                  {txt}
                 </label>
                <button className="destroy"
                  onClick ={this.remove}
                ></button>
            </div>
             <input
               className ="edit"
               ref={(elem)=>{this.db=elem}}
               onBlur={this.blur}
            />
        </li>
    )
  }
}
export default MainModel;
