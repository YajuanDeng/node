

function getList() {
  console.log("call get list");
  const url = "http://127.0.0.1/api/users";
  axios.get(url).then((response) => {
    const users = response.data.data;
    console.log("get users",users);
    users.forEach((user) => {
      const list = document.createElement("li")
      list.innerHTML = `${user.name}   ${user.age}`
      document.getElementById("myList").appendChild(list) 
    });
  })
}

function postUser() {
  console.log("call post list");
  const url = "http://127.0.0.1/api/user";
  const body = {
    name: "ben",
    age: 25
  }
  axios.post(url,body).then((response) => {
    const addedUsers = response.data.data;
    console.log("post user",addedUsers);
    
    const  list = document.createElement("li")
    list.innerHTML =`${addedUsers.name}  ${addedUsers.age}`
    document.getElementById("myList").appendChild(list)

  })


}