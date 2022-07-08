
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    __typename?: 'User';
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    questions?: Nullable<Nullable<Question>[]>;
}

export class Question {
    __typename?: 'Question';
    id: string;
    content: string;
    votes?: Nullable<number>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
