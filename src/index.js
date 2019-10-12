module.exports = function check(str, bracketsConfig) {
    str = str.split('');;
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let firstElement = str[i] === bracketsConfig[j][0];
            console.log("Проверка"+str[i] + str[i+1]);
            let lastElement = str[i + 1] === bracketsConfig[j][1];
            if (firstElement && lastElement) {
                str.splice(i, 2);
                i = -1;
            }
        }
        if (str.length === 0){
            return true;
        }
    }
    return false;
}
