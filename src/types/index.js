import aliveStatusType from './alive_status_type'
import genderEnum from './gender_enum'
import occupationEnum from './occupation_enum'
import occupationCategoryEnum from './occupation_category_enum'
import activityEnum from './activity_enum'
import activitiesCategoryEnum from './activities_category_enum'
import compromiseLevelEnum from './compromise_level_enum'
import compromiseCategoryEnum from './compromise_category_enum'
import affinityRankEnum from './affinity_rank_enum'
import communicationAppEnum from './communication_app_enum'
import schoolGradeEnum from './school_grade_enum'
import stateEnum from './state_enum'
import customScalars from './custom_scalars'
import createFormResponseInput from './create_form_response_input'
import formResponseType from './form_response_type'


const TYPES = `
    ${genderEnum}
    ${activityEnum}
    ${activitiesCategoryEnum}
    ${occupationEnum}
    ${occupationCategoryEnum}
    ${compromiseCategoryEnum}
    ${compromiseLevelEnum}
    ${affinityRankEnum}
    ${communicationAppEnum}
    ${schoolGradeEnum}
    ${stateEnum}
    ${customScalars}
    ${aliveStatusType}
    ${createFormResponseInput}
    ${formResponseType}
`

export default TYPES
