import React,{Component} from 'react';

class FooterModule extends Component{
   clearcli=(()=>{
      this.props.clearcli()
   });

   click=((ev)=>{
         this.props.chanfoot(ev.target.hash)
   });

   render (){
      return(
         <footer className="footer" style={this.props.footer}>
            <span className="todo-count">
               <strong>{this.props.n}</strong>
               <span>条未选中</span>
            </span>
            <ul className="filters">
               <li>
                  <a
                     href="#/all"
                     className={this.props.has == '#/all'?'selected':''}
                     onClick={this.click}
                  >全部</a>
               </li>
               <li>
                  <a
                     href="#/active"
                     className={this.props.has=='#/active'?'selected':''}
                     onClick={this.click}
                  >未完成</a>
               </li>
               <li>
                  <a
                     href="#/completed"
                     className={this.props.has=='#/completed'?'selected':''}
                     onClick={this.click}
                  >已完成</a>
               </li>
            </ul>
            <button
               className="clear-completed"
               onClick={this.clearcli}
            >清除完成项</button>
         </footer>
      );
   };
};

export default FooterModule;
