import React,{Component} from 'react'

class Counter extends Component{

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementFunc() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }

    incrementFiveFunc(){
        this.incrementFunc()
        this.incrementFunc()
        this.incrementFunc()
        this.incrementFunc()
        this.incrementFunc()
    }

    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick ={()=> this.incrementFiveFunc()}>Increment Counter</button>
            </div>
            
        )
    }
}

export default Counter