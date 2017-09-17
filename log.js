import config from './confLog'
import style from './styleLog'

function getNow(){
    var now = new Date();
    return (now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+':'+now.getMilliseconds());
}

export default function(moudle='Unknown'){
    this.moudle = moudle;
    this.filter=()=>{
        for(let i of config.filters){
            var reg = new RegExp(i);
            if(reg.test(this.moudle)){
                return true;
            };
        }
        return false;
    }
    this.output=()=>{
        if((config.level<=config[this.mode].level)&&(this.str.length>0)&&(!this.filter())){
            var now = config.time?getNow():'';
            console.log('%c'+this.icon+'%c '+now+' '+this.moudle+' -',style[this.mode].icon,style.moudle,...this.str);
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