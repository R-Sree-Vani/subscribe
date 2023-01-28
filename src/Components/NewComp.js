import React,{Component} from "react";
import notsubs from "./notsubs.png";
import subs from "./subs.png";

export class NewComp extends Component{
    constructor(props){
        super(props)

        this.state={
            message: "Please Subscribe",
            sub:"Subscribe",
            imgageURL:notsubs,
            cursor:"pointer"
        };
    }

    styles={
        fontStyle:"italic",
        color: "purple"
      };

      bstyles={
        height:"40px",
        fontSize:"20px",
        backgroundColor:"yellow",
        borderRadius:"7px",
        cursor:"pointer"

      }
    ButtonChange=()=>{
        this.setState({
            message:"Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
    }
    imageChange=()=>{
        this.setState({
             imgageURL: subs,
             message: "Thank you! Happy Learning"
        })
    }
    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button style={this.bstyles} onClick={this.ButtonChange}>{this.state.sub}</button>
                <p/>
                    <img style={{width :"50px", height : "50px"}} src={this.state.imgageURL} onClick={this.imageChange} alt=""/>
                
            </div>
        )
    }
}