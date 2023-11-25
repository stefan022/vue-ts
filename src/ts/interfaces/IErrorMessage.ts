export interface IErrorMessage {
	username: { 
        isError: boolean; 
        message?: string 
    };
	email: { 
        isError: boolean; 
        message?: string 
    };
	password: { 
        isError: boolean; 
        message?: string 
    };
};