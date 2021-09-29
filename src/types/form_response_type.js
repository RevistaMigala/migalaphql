const FormResponse = `
    type FormResponse {
        email: String!
        zipcode: Zipcode
        state: State
        city: String
        phone: Phone
        phoneCityCode: PhoneCityCode
        phoneCountryCode: PhoneCountryCode
        electorKey: ElectorKey
        electoralDistrict: ElectoralDistrict
        occupation: Occupation
        occupationCategory: OccupationCategory
        workInProfession: Boolean
        schoolGrade: SchoolGrade
        activity: Activity
        activitiesCategory: ActivitiesCategory
        compromiseLevel: CompromiseLevel
        compromiseCategory: CompromiseCategory
        activityHours: Int
        hasInternet: Boolean
        hasMobileInternet: Boolean
        hasCellphoneWithInternet: Boolean
        hasPersonalComputer: Boolean
        techKnowledge: AffinityRank
        mostUsedApp: CommunicationApp
    }
`
export default FormResponse
