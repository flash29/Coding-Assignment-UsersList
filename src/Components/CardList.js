import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
  return (
    <div>
      {
        users.map((user, i) => {
          return (
            <Card
              key={i}
              username={users[i].name}
              contactno={users[i].cell}
              email={users[i].email}
              picture={users[i].picture}
              gender={users[i].gender}
              age={users[i].dob.age}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
