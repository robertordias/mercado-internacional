import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

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

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default currentUsers;
