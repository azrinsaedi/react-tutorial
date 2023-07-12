import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://th.bing.com/th/id/R.fc9ff391e0b92927fc4a526a939b2ca3?rik=M35YB1MrloATrw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd4%2fCat_March_2010-1a.jpg&ehk=lmx5Dow%2btE7KUtrgWeamODrZNBeLisLC4x4%2bkXQRDq8%3d&risl=1&pid=ImgRaw&r=0" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
