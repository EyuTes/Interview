import { assert } from "chai";

const database = {
    621: { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
    123: { id: 123, name: "FriendNo1", friends: [621, 631] },
    251: { id: 251, name: "SecondBestFriend", friends: [621] },
    631: { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] }
};

const getUser = id => new Promise((res, rej) => {
    setTimeout(() => {
        database[id] ? res(database[id]) : rej(new Error("not_found"))
    }, 300);
});

const expected = [
    { id: 621, name: "XxDragonSlayerxX", friends: [
        { id: 123, name: "FriendNo1", friends: [621, 631] },
        { id: 251, name: "SecondBestFriend", friends: [621] },
        { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] }
    ] },
    { id: 123, name: "FriendNo1", friends: [
        { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
        { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] }
    ] },
    { id: 251, name: "SecondBestFriend", friends: [
        { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] }
    ] },
    { id: 631, name: "ThirdWh33l", friends: [
        { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
        { id: 123, name: "FriendNo1", friends: [621, 631] },
        { id: 251, name: "SecondBestFriend", friends: [621] },
    ] },
];

const validate = (result) => {
    try {
        assert.deepEqual(result, expected);
    } catch (e) {
        console.error("Failed", e);
    }
};

// implement a method to create this result
const result = [];
const result = [];
for(let db in database){
     for(let i=0; i < database[db].friends.length; i++){
     database[db].friends[i]=findFriends(database[db].friends[i]); 
   }
 }

function findFriends(index){
  for(db in database){
     if(db==index){
      return { "id": index, "name":database[db].name, "friends": database[db].friends};
    }
  }
}
for(let db in database){
    result.push({
          "id": database[db].id, "name":  database[db].name, "friends": database[db].friends 
       });
}
/*
const out = [];
for(let db in database){
  result.push({
     "id":database[db].id, 
     "name":database[db].name,
     "friends":[database[db].friends]
  });
  //Find firiends based on the id
  for(let i=0; i < database[db].friends.length; i++){
   findFriends(database[db].friends[i]);
  }
 }
function findFriends(index){
  for(let db in database){
    if(database[db].id===index){
       out.push({
            "friends":[{
              "id":database[db].id, 
              "name":database[db].name,
              "friends":[database[db].friends]
            }]
    });
    }
   }
}
*/
//Next step marge the two array based on their firnds id
// At the end call validate
validate(result);
