import mongoose, { Model, Schema } from 'mongoose';
import { INotification } from './notifications.interface';

const notificationSchema = new Schema<INotification>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    admin: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    // plan_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Plan',
    // },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
const Notification: Model<INotification> = mongoose.model(
  'Notification',
  notificationSchema,
);

export default Notification;
