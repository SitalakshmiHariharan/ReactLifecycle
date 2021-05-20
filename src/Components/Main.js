import React, {Component} from 'react';

class Main extends Component{
    constructor(props){
        console.log("constructor: Step 1 in Mounting");
        super(props);
        this.state={
            content: "Life is very short nanba.... "
        }
        this.changeLine = this.changeLine.bind(this);
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps: Step 2 in Mounting/Step 1 in Updating");
    }
    
    changeLine(){
        this.setState({content:"Let me tell a kutty story"});
    }

    render(){
        console.log("render: Step 3 in Mounting and Updating")
        return(
            <div>
                <p> {this.state.content}{this.props.message} </p>
                <button onClick={this.changeLine}>Kutty Story</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("componentDidMount(): Step 4 in Mounting");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate: Step 2 in Updating");
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate: Step 4 in Updating")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate: Step 5 in Updating")
    }
}

export default Main;