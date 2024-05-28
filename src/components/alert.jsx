import { Cancel, CheckCircle } from "@mui/icons-material";

const ShowAlert = ({type,msg})=>{
    return(
        <div className={`h-screen flex items-center justify-center`} style={{background:type === 'error'?'#E7F7E9':'#dcfce7'}}>
            <div className="shadow-md bg-white rounded-md sm:w-[40%] lg:w-[30%] w-[80%] h-[20%] flex items-center flex-col justify-around">
                <span className="w-11 h-11 flex items-center justify-center text-4xl rounded-full" style={{background:type === 'error'?'#fca5a5':'#86efac'}}>
                    {type === 'error'?(
                        <Cancel className="text-red-500" style={{fontSize:'inherit'}}/>
                    ):(
                        <CheckCircle className="text-green-500" style={{fontSize:'inherit'}}/>
                    )}
                </span>
                {/* <div className="sm:w-[40%] w-[60%]">
                    <img src="/no data.svg" className="object-cover" alt="Error" />
                </div>  */}
                <span className="sm:text-2xl text-xl lg:text-3xl">{msg}</span>
            </div>
        </div>
    );
}

export default ShowAlert;