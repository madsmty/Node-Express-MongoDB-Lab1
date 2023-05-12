import { Schema, model } from "mongoose";

interface ILogEntry {
    resourceAccessed: string,
    userId: string,
    dateCreated: Date
}

export const logEntrySchema = new Schema<ILogEntry>({
    "resourceAccessed": {type: String, required: true},
    "userId": {type: String, required: true},
    "dateCreated": {type: Date, required: true}
    });

export const LogEntry = model<ILogEntry>("LogEntry",logEntrySchema);
