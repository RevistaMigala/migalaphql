import mutationsResolvers from './mutations'
import scalarResolvers from './scalars'
import queryResolvers from './queries'

const resolvers = {
    ...scalarResolvers,
    ...mutationsResolvers,
    ...queryResolvers,
}


export default resolvers
