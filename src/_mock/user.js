const currentUsers = [
  {
        "id": 1,
        "name": "Roberto Rodrigues",
        "email": "roberto.silva@aggrandize.com.br",
        "photoURL": '/static/mock-images/avatars/avatar_default.jpg',
        "roles": [
            {
                "id": 4,
                "name": "ROLE_ADMIN"
            }
        ],
        "active": true
    },
    {
        "id": 2,
        "name": "Roberto Dias",
        "email": "roberto_rodrigues162@outlook.com",
        "photoURL": '/static/mock-images/avatars/avatar_default.jpg',
        "roles": [
            {
                "id": 4,
                "name": "ROLE_USER"
            }
        ],
        "active": true
    },
  {
      "id": 3,
      "name": "Vinícius Aggrandize",
      "email": "vinicius.cassales@aggrandize.com.br",
      "photoURL": '/static/mock-images/avatars/avatar_default.jpg',
      "roles": [
          {
              "id": 4,
              "name": "ROLE_ADMIN"
          }
      ],
      "active": true
  },
  {
      "id": 4,
      "name": "Vinícius Gmail",
      "email": "vcassales@gmail.com",
      "photoURL": '/static/mock-images/avatars/avatar_default.jpg',
      "roles": [
          {
              "id": 3,
              "name": "ROLE_USER"
          }
      ],
      "active": true
  },
  {
      "id": 6,
      "name": "Vinícius Hotmail",
      "email": "viniciuscassales@hotmail.com",
      "photoURL": '/static/mock-images/avatars/avatar_default.jpg',
      "roles": [
          {
              "id": 3,
              "name": "ROLE_USER"
          }
      ],
      "active": true
  }
]

export default currentUsers;
