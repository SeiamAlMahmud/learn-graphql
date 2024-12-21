import express from 'express'
import cors from 'cors'
import {errorMiddleware} from './middlewares/error.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import { schema } from './graphql/schema/schema.js'
import { connectDB } from './DB/connectDB.js'
import { getAlUsers, getuserById } from './controllers/user.controller.js'
import { getAllCourses, getAllLectures, getCourseById } from './controllers/course.controller.js'
import Lecture from './models/lecture.model.js'

dotenv.config({path: './.env',});


// Connect to MongoDB
connectDB();

  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = Number(process.env.PORT) || 5000;


  // const app = express();
const server = new ApolloServer({
typeDefs: schema,
resolvers: {
  Query: {
    users: getAlUsers,
    courses: getAllCourses,
    course: getCourseById,
    lectures: getAllLectures
  },
  Course: {
    instructor:async (courseParent)=> {
    return await getuserById(courseParent.instructor)
    }
  },
  // Lecture: {
  //   videoUrl: async (lectureParent) => {
  //     // Convert the Mongoose document to a plain JavaScript object
  //     const lectureData = lectureParent.toObject();
  
  //     // Initialize bucketUrl as an empty object
  //     const bucketUrl: { [key: string]: string } = {};
  
  //     // Check if videoUrl exists and is an object
  //     if (lectureData.videoUrl && typeof lectureData.videoUrl === 'object') {
  //       for (const key in lectureData.videoUrl) {
  //         const value = lectureData.videoUrl[key];
  
  //         // Check if the value is neither null nor undefined, and the key is not "_id"
  //         if (value !== null && value !== undefined && key !== "_id") {
  //           // Remove the underscore from the key
  //           const newKey = key.replace('_', '');
  
  //           // Add the value to bucketUrl
  //           bucketUrl[newKey] = value;
  //         }
  //       }
  //     } else {
  //       console.log('videoUrl is missing or empty');
  //     }
  
  //     console.log(bucketUrl, 'newKey');
  //     return bucketUrl; // Return the formatted videoUrl object
  //   }
  // }
  
},
})
startStandaloneServer(server, {
  listen: {
    port,
  }
}).then(() => {
  console.log(`Server is working on Port: ${port} in ${envMode} Mode.`);
}).catch((err) => {
  console.log(err);
});

//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev')) 


  // app.get('/', (req, res) => {
  //   res.send('Hello, World!');
  // });

  // your routes here

  
  // app.get("*", (req, res) => {
  //   res.status(404).json({
  //     success: false,
  //     message: 'Page not found'
  //   });
  // });

  // app.use(errorMiddleware);
  
  
  // app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));