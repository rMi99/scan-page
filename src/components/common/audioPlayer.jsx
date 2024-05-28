import { FastForward, FastRewind, Pause, PlayArrow, Repeat, VolumeDown, VolumeOff, VolumeUp } from "@mui/icons-material";
import { CircularProgress, Slider } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

const AudioPlayer = ({src,primaryColor,secondColor,title,poster,album,artist,id, fakeDuration})=> {
    const Player = useRef();
    const [VolumeShow,setVolumeShow] = useState(false);
    // const [isMute,setMute] = useState(false);
    const [volumeLevel,setVolumeLvl] = useState(75);
    const [isPlay,setPlay] = useState(false);
    const [isLoop,setLoop] = useState(false);
    const [duration,setDuration] = useState( fakeDuration ? fakeDuration : '0:00');
    const [current,setCurrent] = useState('0:00');
    const [currentProg,setCurrProg] = useState(0);
    const [isError,setError] = useState(false);
    const [isLoading,setLoading] = useState(fakeDuration ? false : true);
    const [isBarLoading,setBarLoading] = useState(false);

    const setMediaSession = useCallback(()=>{
        if ("mediaSession" in navigator) {
            navigator.mediaSession.setActionHandler("play", ()=>setPlay(true));
            navigator.mediaSession.setActionHandler("pause", ()=>setPlay(false));

            navigator.mediaSession.setActionHandler("seekbackward", () =>RewindSeek());
            navigator.mediaSession.setActionHandler("seekforward", () =>ForwardSeek());

            navigator.mediaSession.setActionHandler("seekto", () => {});

            navigator.mediaSession.metadata = new MediaMetadata({
                artist:artist || '',
                album:album || '',
                title:title || '',
                artwork:poster ? [{
                    sizes:'t512x512',
                    src:poster,
                    type:'image/jpeg'
                }] : []
            })
        }
    },[album, artist, poster, title]);

    useEffect(()=>{
        if(isPlay && !isError){
            Player.current.play();
            setMediaSession();
        }else{
            Player.current.pause();
        }
    },[isPlay, isError, setMediaSession]);

    const timeFormat = (currentTime)=>{
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
        const formatTime = minutes + ":" +  seconds;
        return formatTime;
    };

    useEffect(()=>{
        if(isPlay && !isError){
            setDuration(timeFormat(Player.current.duration));
            Player.current.addEventListener("timeupdate",(e)=>{
                setCurrent(timeFormat(Player.current?.currentTime));
                setCurrProg(((Player.current?.currentTime/Player.current?.duration)*100).toFixed());
            });
        }else if(!isError){
            Player.current.onseeked = (e)=>{
                setCurrent(timeFormat(Player.current?.currentTime));
                setCurrProg(((Player.current?.currentTime/Player.current?.duration)*100).toFixed());
            };
        }
    },[isPlay,isError]);

    useEffect(()=>{
        const player = Player.current;
        player?.addEventListener('play',()=>setPlay(true));
        player?.addEventListener('pause',()=>setPlay(false));

        return ()=>{
            player.removeEventListener('play',()=>setPlay(true));
            player.removeEventListener('pause',()=>setPlay(false));
        }
    });

    useEffect(()=>{
        if(volumeLevel !== '0'){
            Player.current.volume = Number(volumeLevel)/100;
        }
    },[volumeLevel]);

    const RewindSeek = ()=>{
        Player.current.currentTime = Player.current.currentTime - 10;
    }

    const ForwardSeek = ()=>{
        Player.current.currentTime = Player.current.currentTime + 10;
    }

    const TimeLineSeek = (pos)=>{
        if(!isError){
            Player.current.currentTime = (pos*Player.current.duration)/100;
            setCurrProg(pos);
        }
    }

    useEffect(()=>{
        if(VolumeShow){
            document.body.classList.add('overflow-hidden');
        }else{
            document.body.classList.remove('overflow-hidden');
        }
    },[VolumeShow]);

    const styles={
        itemsCenter:'flex items-center justify-center',
        iconSetting:{fontSize:"inherit"}
    };

    return (
        <div className="w-full rounded-md mb-3 shadow-md duration-500" style={{background:primaryColor}} id={id}>
            <div className={`flex items-center bg-slate-200/80 backdrop-blur-md justify-center w-full gap-1 p-2 h-10 xs:h-14 rounded-t-md`}>
                <div className="w-[15%] text-[10px] xs:text-sm text-left">{current}</div>
                <div className="w-[70%] flex place-content-center">
                    <Slider
                        className={`${isLoading || isBarLoading ? 'animate-pulse' : ''} duration-500`}
                        value={Number(currentProg)}
                        aria-label="timeLine"
                        onChange={(e)=>TimeLineSeek(e.target.value)}
                        sx={{
                            color: secondColor,
                            height: 8,
                            '& .MuiSlider-thumb': {
                                width: 15,
                                height: 15,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&::before': {
                                    boxShadow: 'none',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 2px ${secondColor}`
                                },
                                '&.Mui-active': {
                                    boxShadow: `0px 0px 0px 3px ${secondColor}`
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.28,
                            },
                        }}
                    />
                </div>
                <div className="w-[15%] text-[10px] xs:text-sm text-right">{duration}</div>
            </div>
            <div className="bg-slate-400/60 backdrop-blur-lg h-16 flex items-center justify-around rounded-b-md">
                <div 
                    className={`w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 sm:text-[24px] xs:text-[20px] text-[15px] rounded-full hover:bg-gray-200 ${styles.itemsCenter} cursor-pointer bg-slate-300/30 shadow-md`}
                    onClick={()=>setLoop((prev)=>!prev)}
                    style={{background:isLoop?'#e5e7eb':''}}
                >
                    <Repeat style={styles.iconSetting}/>
                </div>
                <div className="flex items-center gap-2">
                    <div 
                        className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 sm:text-[35px] xs:text-[28px] text-[20px] ${styles.itemsCenter} rounded-full hover:bg-gray-200 cursor-pointer bg-slate-300/30 active:bg-gray-100 shadow-md`}
                        onClick={RewindSeek}
                    >
                        <FastRewind style={styles.iconSetting}/>
                    </div>
                    <div 
                        className={`rounded-full bg-slate-100 w-12 xs:w-14 sm:w-14 h-12 xs:h-14 sm:h-14 text-[30px] xs:text-[43px] sm:text-[48px] ${styles.itemsCenter} shadow-lg hover:bg-slate-200 cursor-pointer`} 
                        onClick={!isLoading ? ()=>setPlay((prev)=>!prev) : null}
                        style={{background:isLoading?"#d7d7d7":(isPlay?'#f1f5f9':'#f1f5f9'),cursor:isLoading?"wait":"pointer"}}
                    >
                        {isLoading ? (
                            <CircularProgress sx={{color:secondColor}} size={25}/>
                        ) : (
                            isPlay ? <Pause style={styles.iconSetting}/> : <PlayArrow style={styles.iconSetting} />
                        )}
                    </div>
                    <div 
                        className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 sm:text-[35px] xs:text-[28px] text-[20px] ${styles.itemsCenter} rounded-full hover:bg-gray-200 cursor-pointer active:bg-gray-100 bg-slate-300/30 shadow-md`}
                        onClick={ForwardSeek}
                    >
                        <FastForward style={styles.iconSetting}/>
                    </div>
                </div>
                <div 
                    className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 sm:text-[24px] xs:text-[20px] text-[15px] rounded-full hover:bg-gray-200 cursor-pointer relative bg-slate-300/30 shadow-md"
                    onClick={()=>setVolumeShow((prev)=>!prev)} 
                    // onMouseLeave={()=>setVolumeShow(false)}
                >
                    <span>
                        {volumeLevel <= 0 ? (
                            <VolumeOff style={styles.iconSetting}/>
                        ) :( 
                            volumeLevel > 50 ? (
                                <VolumeUp style={styles.iconSetting}/>
                            ) :( 
                                <VolumeDown style={styles.iconSetting}/>
                            )
                        )}
                    </span>
                    
                    <div 
                        className={`${VolumeShow ? 'flex' : 'hidden'} flex-col items-center justify-center absolute w-[40px] h-[145px] bg-slate-400 top-[-150px] duration-500 hover:top-[-153px] sm:left-0 left-[-4px] z-40 rounded-md shadow-md`}
                        onMouseLeave={()=>setVolumeShow((prev)=>!prev)} 
                        onClick={()=>setVolumeShow((prev)=>!prev)}
                        onWheel={(e)=>{setVolumeLvl((prev)=>(e.deltaY < 0 ?(prev<100?prev+5:100):(prev>0?prev-5:0)))}}
                    >
                        <input 
                            type="range"
                            className="rotate-[270deg] w-[120px] duration-500"
                            style={{accentColor:secondColor}}
                            min={0} max={100}
                            value={volumeLevel}
                            onChange={(e)=>setVolumeLvl(e.target.value)}
                            onWheel={(e)=>{setVolumeLvl((prev)=>(e.deltaY < 0 ?(prev<100?prev+5:100):(prev>0?prev-5:0)))}}
                        />
                        {/* <span className="absolute bottom-0"><VolumeOff style={{fontSize:'20px'}} /></span> */}
                    </div>
                </div>
            </div>
            <audio 
                autoPlay={true}
                className="hidden" 
                src={src} 
                ref={Player} 
                loop={isLoop} 
                muted={Number(volumeLevel)<5?true:false} 
                controls={true} 
                onWaiting={()=>setBarLoading(true)}
                onCanPlay={()=>setBarLoading(false)}
                onError={()=>{setError(true);setLoading(false)}}
                onLoadedData={(e)=>{setDuration(timeFormat(e.target.duration));setLoading(false)}}
            ></audio>
        </div>
    );
}


export default AudioPlayer;