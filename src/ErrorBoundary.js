import React,{Component} from 'react';


class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render(){
        return(
            <div>
                error
            </div>
        );
    }
}

export default ErrorBoundary;