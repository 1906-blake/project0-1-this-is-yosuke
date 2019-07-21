import session from 'express-session';

const sessionConfiguration = {
    cookie: { secure: false },
};

export const sessionMiddleware = session(sessionConfiguration);