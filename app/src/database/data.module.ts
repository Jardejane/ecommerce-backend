import { Module } from '@nestjs/common';
import {baseProviders} from './dados.providers'

@Module({
    providers: [...baseProviders],
    exports: [...baseProviders]
})

export class dataModule{}