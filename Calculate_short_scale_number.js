function calculate(data){
    function range(start, stop, step) {
        if (typeof stop == 'undefined') {
            stop = start;
            start = 0;
        }
        if (typeof step == 'undefined') {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    };
    function ReverseString(str) { 
        if(!str || str.length < 2 ||  
                typeof str!== 'string') { 
            return 'Not valid';  
        } 
        const revArray = []; 
        const length = str.length - 1; 
        for(let i = length; i >= 0; i--) { 
            revArray.push(str[i]); 
        } 
        return revArray.join(''); 
    }
    var g = data
    if(g.length> 1){
        g = ReverseString(g)
        var x = range(0,g.length,3)
        var temp = ""
        for(var i = 0 ; i < x.length;i++){
            temp  = temp + g.substring(x[i],x[i] + 3) + ","
        }
        final = ReverseString(temp)
        var c = final.substring(1,final.length)
        return c
    } 
    else{
        return g
    }
    }
exports.calculate = calculate;