import { User } from "@/types/types"
  
  const users: { [key: string]: User } = {
    'admin': { username: 'Admin', company: 'IBM'},
    'vik': { username: 'Viktor'},
  };
  
  export const login = (username: string): Promise<User | null> => {
    return new Promise((resolve) => {
        if (users[username]) {
          resolve(users[username]);
        } else {
          resolve(null);
        }
    });
  };
