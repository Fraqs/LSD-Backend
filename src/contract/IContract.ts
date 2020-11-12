import UserDTO from './UserDTO';

export default interface IContract {
	getString(): Promise<string>;
	getNumber(): Promise<number>;
	getBoolean(): Promise<boolean>;
	getUser(): Promise<UserDTO>;
}

// should be installed with "yarn"
