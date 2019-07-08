var room = {
    number: 23,
    occupy: function() {
      alert( this.number );
    }
  };
  
  var guest = {
    name: "Rambo",
    status: "vip",
    action: function() {
      console.log( this.name + "have a speech");
    },
    toJSON: function() {
        return { name: this.name, status: this.status, paid: true };
      }
  };

  var event = {
    title: "Конференция",
    date: new Date(Date.UTC(2014, 0, 1)),
    room: room,
    guest: guest
  };
  
  console.log( JSON.stringify(event) );

  var user = {
    name: "Вася",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  var str = JSON.stringify(user, "", 4);
  
  console.log( str );