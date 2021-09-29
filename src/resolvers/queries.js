import { aliveResolver as alive } from 'Handlers/alive'


export default {
    Query: {
        ...{ alive },
    },
}
