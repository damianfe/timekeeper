import { Schema, model, Document } from 'mongoose';

interface Role extends Document {
    name: string;
}

const roleSchema = new Schema<Role>({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export const RoleModel = model<Role>('Role', roleSchema);
