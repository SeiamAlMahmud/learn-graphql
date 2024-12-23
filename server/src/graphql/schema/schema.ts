export const schema = `#graphql

type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    googleId: String!
    role: String!
    avatar: String!
    verified: Boolean!
    createdAt: String!
    updatedAt: String!
}

type Course {
    _id: ID!
    title: String!
    description: String!
    instructor: User!
    ratingsAverage: Int!
    ratingsQuantity: Int!
    price: Int!
    category: String!
    subCategory: String!
    level: String!
    language: String!
    whatYouWillEarn: [String!]!
    requirements: [String!]!
    targetAudience: [String!]!
    isPublished: Boolean!
    isFree: Boolean!
    isApproved: Boolean!
    isRejected: Boolean!
    isFeatured: Boolean!
    isTrending: Boolean!
    isBestSeller: Boolean!
    coverImage: String!
    previewVideo: String!
    students: [String!]!
    createdAt: String!
    updatedAt: String!
}

type Resource {
    _id: ID
    title: String
    url: String
}

type VideoURL {
    _480p: String
    _720p: String
    _1080p: String
}

type Lecture {
    _id: ID!
    title: String!
    description: String!
    position: Int!
    resources: [Resource]
    videoUrl: VideoURL
    duration: Int!
    # section: Section!
    course: Course!
    instructor: User!
    isPublished: Boolean!
    isPreview: Boolean!
    createdAt: String!
    updatedAt: String!
}

type Query {
    users: [User]
    courses: [Course]
    course(id: ID!): Course
    lectures: [Lecture]
    # sections: [Section]
}
`