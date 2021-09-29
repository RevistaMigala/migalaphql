const createFormResponseInput = `
    input CreateFormResponseInput {
        email: String!
        age: Int
        zipcode: Zipcode
        state: State
        city: String
        phone: Phone
        phoneCityCode: PhoneCityCode
        phoneCountryCode: PhoneCountryCode
        electorKey: ElectorKey
        electoralDistrict: ElectoralDistrict
        firstOccupation: Occupation
        secondOccupation: Occupation
        thirdOccupation: Occupation
        firstOccupationCategory: OccupationCategory
        secondOccupationCategory: OccupationCategory
        thirdOccupationCategory: OccupationCategory
        workInProfession: Boolean
        schoolGrade: SchoolGrade
        firstActivity: Activity
        secondActivity: Activity
        thirdActivity: Activity
        firstActivitiesCategory: ActivitiesCategory
        secondActivitiesCategory: ActivitiesCategory
        thirdActivitiesCategory: ActivitiesCategory
        compromiseLevel: CompromiseLevel
        firstCompromiseCategory: CompromiseCategory
        secondCompromiseCategory: CompromiseCategory
        thirdCompromiseCategory: CompromiseCategory
        activityHours: Int
        hasInternet: Boolean
        hasMobileInternet: Boolean
        hasCellphoneWithInternet: Boolean
        hasPersonalComputer: Boolean
        techKnowledge: AffinityRank
        mostUsedApp: CommunicationApp
    }
`
export default createFormResponseInput
