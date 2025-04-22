import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: { type: Schema.Types.String, require: true },
    email: { type: Schema.Types.String, unique: true },
    password: { type: Schema.Types.String, require: true },
}, { timestamps: true })

// UserSchema.index({ name: 1, email: 1 });
UserSchema.index({ '$**': 'text' });

const User = model('User', UserSchema, 'users')

export default User;