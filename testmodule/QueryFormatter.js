/**
 *
 * @authors NYY
 *@company ijia-tech
 * @date   2018-02-07 15:13
 */

export  default class   QueryFormatter{
    static  format(value){
        if (value.startsWith("\"") && value.endsWith("\"")){
            return value.toLowerCase();
        }
        return value.toLowerCase().replace(/-/g,"\\-").replace(/\\\\/g,"\\");
    }
}

