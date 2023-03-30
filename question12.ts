type Profile = {
  name: string;
  age: number;
  location: string;
  hobbies: string[];
};

type User = {
  id: number;
  email: string;
  profile: Profile;
};

const user: User = {
  // 以下が出力されるようにインスタンス情報を設定する
  id: 1,
  email: "john@example.com",
  profile: {
    name: "John",
    age: 30,
    location: "New York",
    hobbies: ["guitar", "reading"],
  },
};

console.log(user); // 以下が出力される
/*
  {
    "id": 1,
    "email": "john@example.com",
    "profile": {
      "name": "John",
      "age": 30,
      "location": "New York",
      "hobbies": [
        "guitar",
        "reading"
      ]
    }
  }
  */
