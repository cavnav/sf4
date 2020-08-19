import {
    User,
    UserId,
    Request,
} from './interfaces';

interface StoreState {
    userId?: UserId;
    users?: User[];
    requests: { [key in string]: Request[] };
}

interface Store {
    setUser: (user: {userId: string}) => void
    resetUser: () => void
    addRequest: (arg: { request: Request }) => void
    getState: () => StoreState
}

class StoreIml implements Store {
    state: StoreState = {
        requests: {}
    };

    randomMethod = () => {

    };

    setUser(user: {userId: string}) {
        this.state.userId = user.userId;
    }

    resetUser() {
        this.state.userId = undefined;
    }

    addRequest({request}: { request: Request }) {
        this.state.requests = {
            ...this.state.requests,
            [request.userId]: (this.state.requests[request.userId] || []).concat(request)
        }
    }

    getState() {
        return this.state;
    }
}

export const store: Store = new StoreIml();