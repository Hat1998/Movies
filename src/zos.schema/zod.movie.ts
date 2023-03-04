import {TypeOf , z} from 'zod'


export const createAMovie = z.object({
    body:z.object({
        name:z.string({
            required_error:"movie name is required",
            invalid_type_error:"movie name is invalid"
        }).max(20, "movie name should be less than 20 characters")
          .min(2,"movie name should be more than 2 characters"),
          genre:z.string({
            required_error:"genre is required",
            invalid_type_error:"genre is invalid"
        }),
        rating:z.number({
            required_error:"rating is required",
            invalid_type_error:"rating is invalid"
        }),
        duration:z.number({
            required_error:"duration is required",
            invalid_type_error:"duration is invalid"
        })
    })
})

 
export type createMovieSchema = TypeOf <typeof createAMovie>["body"]
 
