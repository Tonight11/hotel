import { Optional, ModelDefined, DataTypes } from "sequelize";
import sequelizeConnection from "../db";

type TypeMarkers = {
    width: string
    longitude: string
}

interface HotelsAttributes {
    id: number;
    name: string;
    description: string;
    image: string;
    secondImage: string;
    address: string;
    markers: TypeMarkers[];
    phone: string;
    floors: number;
    rooms: number;
    freerooms: number;
    parkingspace: number;
    createdAt: string;
    updatedAt: string;
}

type HotelsCreationAttributes = Optional<HotelsAttributes, 'id'>;


const Hotels: ModelDefined<
    HotelsAttributes,
    HotelsCreationAttributes
> = sequelizeConnection.define(
    'hotels',
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING},
        description: { type: DataTypes.STRING},
        image: { type: DataTypes.STRING},
        secondImage: { type: DataTypes.STRING},
        address: { type: DataTypes.STRING},
        markers: { type: DataTypes.ARRAY(DataTypes.STRING)},
        phone: { type: DataTypes.STRING},
        floors: { type: DataTypes.INTEGER},
        rooms: { type: DataTypes.INTEGER},
        freerooms: { type: DataTypes.INTEGER},
        parkingspace: { type: DataTypes.INTEGER},
        createdAt: { type: DataTypes.DATE, defaultValue: sequelizeConnection.literal('NOW()') },
        updatedAt: { type: DataTypes.DATE, defaultValue: sequelizeConnection.literal('NOW()') },
    },
    {
        tableName: 'hotels'
    }
);


export default Hotels