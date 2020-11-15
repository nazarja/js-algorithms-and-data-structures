
function collectStrings(obj) {
    let stringsArr = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
}

console.log(
    collectStrings({
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    })
)