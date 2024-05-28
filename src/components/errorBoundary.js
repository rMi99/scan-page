import { Component } from "react";
import ShowAlert from "./alert";

class ErrorBoundary extends Component{
    
    constructor(props){
        super(props);
        this.state = {hasError:false};
    }

    static getDerivedStateFromError(error){
        return {hasError:true,error};
    }

    componentDidCatch(error,errorInfo){
        
    }

    render(){
        const {hasError,error} = this.state;

        if(hasError){
            console.warn(error.message);
            // return <this.props.fallBackComponent type="error" msg={`Runtime Error!`}/>;
            return <ShowAlert type="error" msg={`Runtime Error!`}/>;
        }else{
            return this.props.children;
        }

    }

}

export default ErrorBoundary;