import { Contact } from '../models/contacts.model';

export interface UploadContact { 
    total: number;
    contact: Contact[];
}