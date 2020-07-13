import { assert } from "chai";

const names = [
    "Michael Daniel Jäger",
    "LINUS HARALD christer WAHLGREN",
    "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
    "Kalle Anka",
    "Ghandi"
];

const expected = [
    { first: "Michael", middle: ["Daniel"], last: "Jäger" },
    { first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren" },
    { first: "Pippilotta", middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"], last: "Långstrump" },
    { first: "Kalle", middle: [], last: "Anka" },
    { first: "Ghandi", middle: [], last: null },
];

const validate = (result) => {
    try {
        assert.deepEqual(result, expected);
    } catch (e) {
        console.error("Failed", e);
    }
};

// implement code generating result: Split name strings into their respective parts

for(let name in names) {
    let fullName=(names[name].split(" "));//split the fullname
    if(fullName.length==1){
        result.push({
            "first" :fullName[0],
            "middle" :[],
            "last" :null,
        }); 
    }

    if(fullName.length==2){
        result.push({
            "first" :fullName[0],
            "middle":[],
            "last" :fullName[1],
        }); 
    }
    if(fullName.length==3){
        result.push({
            "first" :fullName[0],
            "middle" :[fullName[1]],
            "last" :fullName[2],
        });
    }
    if(fullName.length > 3){
        result.push({
            "first" :fullName[0],
            "middle" :fullName.slice(1,fullName.length-1),
            "last" :fullName[fullName.length-1],
        });
    }

}
        
console.log(count);
// At the end call validate
validate(result);
