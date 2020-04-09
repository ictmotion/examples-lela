export interface Word {
    word: string;
    description: string;
    masculin: boolean;
    feminin: boolean;
    apostrophe: boolean;
    existsBothMasculinAndFeminin: boolean;
    rule: string;
    ruleException: boolean;
    ruleExceptionExplanation: string;
    createdBy: string; //Date
}