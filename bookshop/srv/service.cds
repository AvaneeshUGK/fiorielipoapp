using { db } from '../db/schema';

service MyService {

    entity book as projection on db.book;

};