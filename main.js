import defaultConfig from './config'
import style from './style'

function getNow(){
    var now = new Date();
    return (now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+':'+now.getMilliseconds());
}

function handleConfig(oldVal, newVal){
    for(let i in newVal) {
        oldVal[i] = newVal[i];
    }
    return oldVal;
}

export default function(config=defaultConfig){
    config = handleConfig(defaultConfig, config);
    this.module = "Not Config";
    this.init = (val)=>{
        this.module = val;
    } 
    this.filter=()=>{
        for(let i of config.filters){
            var reg = new RegExp(i);
            if(reg.test(this.module)){
                return true;
            };
        }
        return false;
    }
    this.output=()=>{
        if((config.level<=config[this.mode].level)&&(this.str.length>0)&&(!this.filter())){
            let icon = '%c'+this.icon+'%c ';
            var now = config.time?getNow()+' - ':'';
            let module = '%c'+this.module;
            console.log(
                icon+now+module,
                style[this.mode].icon,
                style.time,
                style.module,
                '\n',
                ...this.str
            );
        }
    }
    this.debug=(...str)=>{
        this.mode = 'debug';
        this.icon = 'DBG';
        this.str = str;
        this.output();
    };
    this.info=(...str)=>{
        this.mode = 'info';
        this.str = str;
        this.icon = 'INF';
        this.output();
    };
    this.warn=(...str)=>{
        this.mode = 'warn';
        this.str = str;
        this.icon = 'WRN';
        this.output();
    };
    this.error=(...str)=>{
        this.mode = 'error';
        this.str = str;
        this.icon = 'ERR';     
        this.output();
    }
}