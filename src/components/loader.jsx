import { CircularProgress } from "@mui/material";

export default function Loading({text}){
    return <div style={{width:'100%',height:'100vh',display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px",textAlign:'center'}}>
        <div><CircularProgress color="success" size={55}/></div>
        {text}
    </div>
}