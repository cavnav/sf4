import { 
  User,
  UserId,
  Request,
} from './interfaces';

interface StoreIntf {
  userId: UserId;
  users: User[];
  requests: Request[];
}

class Store<StoreIntf> {
  userId = '';
  users = [];

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
}

export const store = new Store();