import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  password: string
}

const UserSchema = new Schema<IUser>({
  name: { type: 'string', required: true},
  email: { type: 'string', required: true},
  password: { type: 'string', required: true}
}, {
  timestamps: true,
  versionKey: false
})

export default model('User', UserSchema)
