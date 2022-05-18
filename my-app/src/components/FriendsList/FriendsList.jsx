import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
function FriendList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(10);
  }, []);

  async function getUsers(num) {
    await fetch(`https://randomuser.me/api/?results=${num}`)
      .then((res) => res.json())
      .then((data) => data.results)
      .then((results) => setUsers(users.concat(results)));
  }
  async function checkEndScroll() {
    if (users.length > 99) {
      window.removeEventListener("scroll", checkEndScroll);
    } else if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      window.removeEventListener("scroll", checkEndScroll);
      await getUsers(10);
    }
  }
  window.addEventListener("scroll", checkEndScroll);
  return (
    <>
      <h1>Users</h1>
      <button className="btn" onClick={() => getUsers(10)}>
        Get 10 users
      </button>
      <button
        className="btn"
        onClick={() => {
          document.addEventListener("scroll", checkEndScroll);
        }}
      >
        Scroll Activator
      </button>
      <div className="container">
        <ul>
          {users.length === 0 ? (
            <li>No Items</li>
          ) : (
            users.map((item) => (
              <li key={Math.random()}>
                <Card
                  name={item.name.first}
                  avatar={item.picture.large}
                  country={item.location.country}
                  email={item.email}
                />{" "}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
export default FriendList;
