// import without binding
// for example you want add a function to Array
if (!Array.prototype.contain){
    Array.prototype.contain = function(e){
        for(let num of this){
            if(e == num)
                return true;
        }
        return false;
    }   
}