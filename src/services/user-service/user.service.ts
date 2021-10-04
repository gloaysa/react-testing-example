import { User } from 'services/user-service/user.interface';

export class UserService {
	protected user: User | undefined;

	protected noTitle: string = 'no-title';

	public async fetchUser() {
		this.user = await fetch('https://jsonplaceholder.typicode.com/user/1').then((response) =>
			response.json()
		);
	}

	public getUserName(): string {
		return this.user?.username || this.noTitle;
	}

	public modifyUser(userName: string): User {
		return this.changeUserName(userName);
	}

	private changeUserName(newUsername: string): User {
		if (!this.user) {
			throw new Error('No user available');
		}
		this.user.username = newUsername;
		return this.user;
	}
}
