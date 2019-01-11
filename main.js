import config from './config'
import style from './style'

function getNow(){
    var now = new Date();
    return (now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+':'+now.getMilliseconds());
}

function setConfig(conf){
    for(let i in conf) {
        config[i] = conf[i];
    }
}

let Log =  function(module){
    var module = module||"Not Config";
    this.filter=()=>{
        for(let i of config.filters){
            var reg = new RegExp(i);
            if(reg.test(module)){
                return true;
            };
        }
        return false;
    }
    this.output=()=>{
        if((config.level<=config[this.mode].level)&&(this.str.length>0)&&(!this.filter())){
            let icon = '%c'+this.icon+'%c ';
            var now = config.time?getNow()+' - ':'';
            let modules = '%c'+module;
            console.log(
                icon+now+modules,
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

export {
    setConfig,
    Log,
} 