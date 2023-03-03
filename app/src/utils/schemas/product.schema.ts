import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ApiProperty } from '@nestjs/swagger';

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @ApiProperty()
    @Prop()
    image: string;
    @ApiProperty()
    @Prop()
    id : string;
    
    @ApiProperty()
    @Prop()
    name: string;

    @ApiProperty()
    @Prop()
    description: string;

    @ApiProperty()
    @Prop()
    price: number;

    @ApiProperty()
    @Prop()
    category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)