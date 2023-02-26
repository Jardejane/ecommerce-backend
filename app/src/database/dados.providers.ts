import * as mongoose from 'mongoose'

export const baseProviders =[
    {
        provide : 'DATABASE_CONNECTION',
         useFactory: (): Promise<typeof mongoose> =>
         mongoose.connect(process.env.UrlDataBase)
    }
]

