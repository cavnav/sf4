import { 
  User,
  UserId,
  Request,
} from './interfaces';

interface StoreIntf {
  state: {
    userId: UserId;
    users: User[];
    requests: Request[];
  }
}

class Store<StoreIntf> {
  state = {
    userId: '',
    users: [],
    requests: [],
  };

  setUser(props: Partial<{userId: UserId}>) {
    this.userId = props.userId;
  }

  resetUser() {
    this.userId = undefined;
  }

  addRequest({
    request,
  }) {
    this.requests[userId].push(request);
  }
  
  getState() {
    return this.state;
  }
}

export const store = new Store();