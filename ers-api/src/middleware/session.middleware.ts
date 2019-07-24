import session from 'express-session';

const sessionConfiguration = {
    secret: 'occult',
    cookie: { secure: false },
};

export const sessionMiddleware = session(sessionConfiguration);