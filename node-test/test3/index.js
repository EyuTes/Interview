import { assert } from "chai";

const positions = [
    { a: ["C", 2], b: ["D", 4], canAttack: true },
    { a: ["F", 7], b: ["E", 5], canAttack: true },
    { a: ["C", 2], b: ["A", 1], canAttack: true },
    { a: ["A", 6], b: ["B", 4], canAttack: true },
    { a: ["A", 6], b: ["B", 5] },
    { a: ["C", 2], b: ["C", 2] },
    { a: ["A", -1], b: ["B", 1] },
    { a: ["D", 4], b: ["E", 5] },
];

// implement this method to test if two knights threaten eachother
//Validate if two knights in a game of chess can attack each other based on their position.
const canAttack = (a, b) => {
    result=false;
     
    /*
     * if character difference=0 or >2 or position of a and b <=0  then return false;
     * if character difference is 1 then check postion diffrence(if it's 2 return trure false otherwise)
     * if character difference is 2 then check postion diffrence(if it's 1 return trure false otherwise)
     */
    let characterDifference=Math.abs((positions.b[0]).charCodeAt()-(positions.a[0]).charCodeAt());
    let positionDifference=Math.abs(positions.a[1]-positions.b[1]);
    if(characterDifference==0 || characterDifference >2 || positions.a[1]<=0 ||(positions.b[1]<=0)){
        result=false;
     }
    if(characterDifference==1){
        result=(positionDifference==2)? true:false;
     }
     if(characterDifference==2){
        result=(positionDifference==1)? true:false;
     }
    return result;
}

positions.forEach(test => {
    try {
        assert.equal(canAttack(test.a, test.b), !!test.canAttack);
    } catch (e) {
        console.error("FAILED", test);
    }
});
