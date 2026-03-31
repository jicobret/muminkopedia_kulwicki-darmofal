import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICharacter extends Document {
    name: string;
    description: string;
    species: string;
    isHibernating: boolean;
    bestFriend?: Types.ObjectId;
}

const CharacterSchema = new Schema<ICharacter>({
    name: {
        type: String,
        required: true,
    },
    description: { type: String, required: true },
    species: { type: String, required: true },
    isHibernating: { type: Boolean, default: false },
    bestFriend: {
        type: Schema.Types.ObjectId,
        ref: "Character",
    },
});

export default mongoose.model<ICharacter>("Character", CharacterSchema);